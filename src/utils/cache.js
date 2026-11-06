const { AsyncLocalStorage } = require('async_hooks');
const { Redis } = require('@upstash/redis');

const requestCache = new AsyncLocalStorage();

// Exposes the cache result of a request as an X-Cache response header (HIT, MISS or BYPASS).
function cacheStatusHeader(req, res, next) {
  const store = { status: null };
  const json = res.json.bind(res);
  res.json = (body) => {
    if (store.status) res.set('X-Cache', store.status);
    return json(body);
  };
  requestCache.run(store, next);
}

function markStatus(status) {
  const store = requestCache.getStore();
  if (store) store.status = status;
}

const TTL_SECONDS = 60 * 60 * 24;
const VERSION_KEY = 'cache:version';

const enabled = Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
const redis = enabled
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

// Every key embeds a global version; bumping it invalidates all cached entries at once.
async function currentVersion() {
  return (await redis.get(VERSION_KEY)) || 0;
}

// Cache failures never break requests; they fall back to the database.
async function remember(key, loader) {
  if (!redis) {
    markStatus('BYPASS');
    return loader();
  }

  let fullKey;
  try {
    fullKey = `cache:v${await currentVersion()}:${key}`;
    const hit = await redis.get(fullKey);
    if (hit !== null && hit !== undefined) {
      markStatus('HIT');
      return hit;
    }
  } catch (error) {
    console.error('Cache read failed:', error.message);
    markStatus('BYPASS');
    return loader();
  }

  markStatus('MISS');
  const value = await loader();
  try {
    await redis.set(fullKey, value, { ex: TTL_SECONDS });
  } catch (error) {
    console.error('Cache write failed:', error.message);
  }
  return value;
}

async function invalidateAll() {
  if (!redis) return;
  try {
    await redis.incr(VERSION_KEY);
  } catch (error) {
    console.error('Cache invalidation failed:', error.message);
  }
}

// Wraps the named service functions so a successful call invalidates the cache.
function invalidateOnSuccess(service, names) {
  const wrapped = { ...service };
  for (const name of names) {
    const original = service[name];
    wrapped[name] = async (...args) => {
      const result = await original(...args);
      await invalidateAll();
      return result;
    };
  }
  return wrapped;
}

module.exports = { remember, invalidateAll, invalidateOnSuccess, cacheStatusHeader };
