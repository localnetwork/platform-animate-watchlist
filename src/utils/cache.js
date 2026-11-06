const { Redis } = require('@upstash/redis');

const TTL_SECONDS = 60 * 60 * 24;
const CATALOG_VERSION_KEY = 'cache:version:catalog';
const userVersionKey = (userId) => `cache:version:user:${userId}`;

const enabled = Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
const redis = enabled
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

function setCacheHeaders(res, status, expiration) {
  res.set('X-Cache', status);
  if (expiration !== undefined) res.set('X-Cache-Expiration', String(expiration));
}

// Caches successful JSON GET responses.
//  - scope 'public': shared by everyone (place before the handler of public routes).
//  - scope 'user': one entry per authenticated user (place after auth and permission checks).
// Keys embed a catalog version (bumped by any data change) and, for user scope, a per-user
// version (bumped by changes that only affect that user), so invalidation never scans keys.
// X-Cache-Expiration is the number of seconds left before the cached entry expires.
// `onHit(req, body)` may adjust or react to a cached body before it is returned.
function cacheResponses({ scope = 'public', onHit } = {}) {
  return async (req, res, next) => {
    if (req.method !== 'GET') return next();

    if (!redis) {
      setCacheHeaders(res, 'BYPASS');
      return next();
    }

    let fullKey;
    try {
      const userScoped = scope === 'user' && req.user;
      const [catalogVersion, userVersion] = await redis.mget(
        CATALOG_VERSION_KEY,
        userScoped ? userVersionKey(req.user.id) : CATALOG_VERSION_KEY,
      );
      const owner = userScoped ? `u${req.user.id}:${userVersion || 0}` : 'public';
      fullKey = `cache:c${catalogVersion || 0}:${owner}:${req.originalUrl}`;

      const [hit, ttl] = await redis.pipeline().get(fullKey).ttl(fullKey).exec();
      if (hit !== null && hit !== undefined) {
        setCacheHeaders(res, 'HIT', ttl > 0 ? ttl : 0);
        const body = onHit ? await onHit(req, hit) : hit;
        return res.json(body);
      }
    } catch (error) {
      console.error('Cache read failed:', error.message);
      setCacheHeaders(res, 'BYPASS');
      return next();
    }

    setCacheHeaders(res, 'MISS', TTL_SECONDS);
    const json = res.json.bind(res);
    res.json = (body) => {
      if (res.statusCode === 200) {
        redis.set(fullKey, body, { ex: TTL_SECONDS }).catch((error) => {
          console.error('Cache write failed:', error.message);
        });
      }
      return json(body);
    };
    return next();
  };
}

async function bump(keys) {
  if (!redis) return;
  try {
    await Promise.all(keys.map((key) => redis.incr(key)));
  } catch (error) {
    console.error('Cache invalidation failed:', error.message);
  }
}

function invalidateAll() {
  return bump([CATALOG_VERSION_KEY]);
}

// Invalidates after every successful write, before the response is flushed to the client,
// so a follow-up read can never see stale data.
//  - status/favorite changes only affect the acting user's responses.
//  - everything else (anime, episodes, authors, genres, types, ratings, profile) bumps the
//    catalog version, which also invalidates every user-scoped entry.
//  - view-count pings, logins and uploads do not invalidate anything.
function invalidateOnWrite(req, res, next) {
  const method = req.method;
  if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS') return next();

  const path = req.originalUrl.split('?')[0];
  if (/^\/api\/auth\/(login|register)$/.test(path) || /\/view$/.test(path) || path.startsWith('/api/uploads')) {
    return next();
  }

  const userOnly = /^\/api\/watchlist\/[^/]+\/(status|favorite)$/.test(path);

  const end = res.end.bind(res);
  res.end = (...args) => {
    if (res.statusCode >= 400) return end(...args);
    const keys = userOnly ? [] : [CATALOG_VERSION_KEY];
    if (req.user) keys.push(userVersionKey(req.user.id));
    bump(keys).finally(() => end(...args));
    return res;
  };
  return next();
}

module.exports = { cacheResponses, invalidateOnWrite, invalidateAll, redis };
