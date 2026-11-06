const { WatchStatus } = require("../../src/generated/prisma");

// Each taste maps to a mean and spread so members rate noticeably differently.
const TASTES = {
  generous: { mean: 8.5, spread: 1.2 },
  harsh: { mean: 5.0, spread: 1.6 },
  average: { mean: 7.0, spread: 1.3 },
  polarized: { mean: 6.5, spread: 3.2 },
};

function createRandom(seed) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

function hashString(value) {
  let hash = 7;
  for (const char of value) {
    hash = (hash * 31 + char.charCodeAt(0)) % 4294967296;
  }
  return hash;
}

function gaussian(random) {
  const u = Math.max(random(), 1e-9);
  const v = random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function clampRating(value) {
  return Math.min(10, Math.max(1, Math.round(value)));
}

function pickWatchStatus(random, airedStatus, hasRating) {
  if (airedStatus === "NOT_YET_RELEASED") return WatchStatus.PLANNED;
  if (!hasRating) {
    return random() < 0.6 ? WatchStatus.PLANNED : WatchStatus.WATCHING;
  }
  if (airedStatus === "AIRING") {
    return random() < 0.75 ? WatchStatus.WATCHING : WatchStatus.DROPPED;
  }
  return random() < 0.85 ? WatchStatus.COMPLETED : WatchStatus.DROPPED;
}

async function seedMemberActivity(prisma, users) {
  const members = users.filter((user) => user.email !== "demo1@anime.local");
  const entries = await prisma.animeEntry.findMany({
    select: { id: true, airedStatus: true },
    orderBy: { slug: "asc" },
  });

  for (const member of members) {
    const taste = TASTES[member.taste] || TASTES.average;
    const random = createRandom(hashString(member.email));
    // Members rate between 35% and 75% of the catalog.
    const ratingChance = 0.35 + random() * 0.4;

    const ratings = [];
    const statuses = [];
    const favorites = [];

    for (const entry of entries) {
      const canRate = entry.airedStatus !== "NOT_YET_RELEASED";
      const rated = canRate && random() < ratingChance;

      if (rated) {
        ratings.push({
          animeEntryId: entry.id,
          userId: member.id,
          value: clampRating(taste.mean + gaussian(random) * taste.spread),
        });
      }

      if (rated || random() < 0.25) {
        statuses.push({
          animeEntryId: entry.id,
          userId: member.id,
          status: pickWatchStatus(random, entry.airedStatus, rated),
        });
      }

      if (rated && random() < 0.12) {
        favorites.push({ animeEntryId: entry.id, userId: member.id });
      }
    }

    await prisma.animeRating.createMany({ data: ratings, skipDuplicates: true });
    await prisma.userAnimeStatus.createMany({ data: statuses, skipDuplicates: true });
    await prisma.animeFavorite.createMany({ data: favorites, skipDuplicates: true });

    console.log(
      `Seeded ${member.email} (${member.taste || "average"}): ${ratings.length} ratings, ${statuses.length} statuses, ${favorites.length} favorites`,
    );
  }
}

module.exports = {
  seedMemberActivity,
};
