const { redis } = require('../utils/cache');

const WINDOW_SECONDS = Number(process.env.RATE_LIMIT_WINDOW_SECONDS) || 60;
const MAX_REQUESTS = Number(process.env.RATE_LIMIT_MAX) || 120;
const AUTH_MAX_REQUESTS = Number(process.env.RATE_LIMIT_AUTH_MAX) || 10;
const BLOCK_SECONDS = Number(process.env.RATE_LIMIT_BLOCK_SECONDS) || 15 * 60;

// In-memory fallback used when Redis is not configured or unreachable (per instance only).
const memory = new Map();

function checkMemory(ip, bucket, max) {
  const now = Date.now();
  const entry = memory.get(ip) || { blockedUntil: 0, buckets: {} };

  if (entry.blockedUntil > now) {
    return { blocked: true, retryAfter: Math.ceil((entry.blockedUntil - now) / 1000) };
  }

  const current = entry.buckets[bucket];
  if (!current || current.reset <= now) {
    entry.buckets[bucket] = { count: 1, reset: now + WINDOW_SECONDS * 1000 };
  } else {
    current.count += 1;
  }

  if (entry.buckets[bucket].count > max) {
    entry.blockedUntil = now + BLOCK_SECONDS * 1000;
    memory.set(ip, entry);
    return { blocked: true, retryAfter: BLOCK_SECONDS };
  }

  memory.set(ip, entry);
  return { blocked: false };
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of memory) {
    const active = Object.values(entry.buckets).some((b) => b.reset > now);
    if (entry.blockedUntil <= now && !active) memory.delete(ip);
  }
}, 60 * 1000).unref();

async function checkRedis(ip, bucket, max) {
  const blockKey = `rl:block:${ip}`;
  const countKey = `rl:${bucket}:${ip}`;

  const [blockedFlag, count] = await redis.pipeline().get(blockKey).incr(countKey).exec();

  if (blockedFlag !== null && blockedFlag !== undefined) {
    const ttl = await redis.ttl(blockKey);
    return { blocked: true, retryAfter: ttl > 0 ? ttl : BLOCK_SECONDS };
  }

  if (count === 1) await redis.expire(countKey, WINDOW_SECONDS);

  if (count > max) {
    await redis.set(blockKey, 1, { ex: BLOCK_SECONDS });
    return { blocked: true, retryAfter: BLOCK_SECONDS };
  }

  return { blocked: false };
}

// Blocks an IP for BLOCK_SECONDS once it exceeds `max` requests within the window.
function rateLimit({ bucket = 'api', max = MAX_REQUESTS } = {}) {
  return async (req, res, next) => {
    const ip = req.ip || req.socket.remoteAddress || 'unknown';

    let result;
    try {
      result = redis ? await checkRedis(ip, bucket, max) : checkMemory(ip, bucket, max);
    } catch (error) {
      console.error('Rate limit check failed:', error.message);
      result = checkMemory(ip, bucket, max);
    }

    if (result.blocked) {
      res.set('Retry-After', String(result.retryAfter));
      return res.status(429).json({
        error: 'Too many requests. Your IP has been temporarily blocked.',
        retryAfter: result.retryAfter,
      });
    }

    return next();
  };
}

module.exports = { rateLimit, AUTH_MAX_REQUESTS };
