const SEED_USERS = [
  {
    email: "demo1@anime.local",
    name: "Demo User One",
    password: "password123",
  },
  {
    email: "demo2@anime.local",
    name: "Demo User Two",
    password: "password123",
  },
  ...[
    ["Aiko Tanaka", "generous"],
    ["Ben Carter", "harsh"],
    ["Chloe Martin", "average"],
    ["Daniel Kim", "polarized"],
    ["Emi Sato", "generous"],
    ["Felix Weber", "harsh"],
    ["Grace Lee", "average"],
    ["Hiro Nakamura", "polarized"],
    ["Isla Brown", "generous"],
    ["Jonas Berg", "average"],
  ].map(([name, taste], index) => ({
    email: `member${String(index + 1).padStart(2, "0")}@anime.local`,
    name,
    password: "password123",
    taste,
  })),
];

console.log("SEED_USERS", SEED_USERS.length);

const COVER_BASE =
  process.env.CF_PUBLIC_ACCESS_URL || "https://pub-demo-anime.r2.dev/";
const SEED_COUNTS = {
  AUTHORS: 500,
  ANIME: 100,
};

function cover(path) {
  const normalized = COVER_BASE.endsWith("/") ? COVER_BASE : `${COVER_BASE}/`;
  return `${normalized}${path}`;
}

module.exports = {
  SEED_USERS,
  SEED_COUNTS,
  cover,
};
