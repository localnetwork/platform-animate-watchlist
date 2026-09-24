const SEED_USERS = [
  {
    email: 'demo1@anime.local',
    name: 'Demo User One',
    password: 'password123',
  },
  {
    email: 'demo2@anime.local',
    name: 'Demo User Two',
    password: 'password123',
  },
];

const COVER_BASE = process.env.R2_PUBLIC_BASE_URL || 'https://pub-demo-anime.r2.dev/';

function cover(path) {
  const normalized = COVER_BASE.endsWith('/') ? COVER_BASE : `${COVER_BASE}/`;
  return `${normalized}${path}`;
}

module.exports = {
  SEED_USERS,
  cover,
};
