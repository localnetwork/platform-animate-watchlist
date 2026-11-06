const crypto = require("crypto");
const { PutObjectCommand } = require("@aws-sdk/client-s3");
const r2Client = require("../../src/config/r2");
const { WatchStatus, AnimeAiredStatus } = require("../../src/generated/prisma");
const { cover } = require("./seedData");

const ANILIST_API = "https://graphql.anilist.co";
const STATUSES = [
  WatchStatus.PLANNED,
  WatchStatus.WATCHING,
  WatchStatus.COMPLETED,
  WatchStatus.DROPPED,
];

const ANIME_QUERY = `
query ($page: Int!, $perPage: Int!, $status: MediaStatus) {
  Page(page: $page, perPage: $perPage) {
    pageInfo { currentPage lastPage hasNextPage }
    media(type: ANIME, status: $status, sort: POPULARITY_DESC) {
      id
      title { romaji english native }
      description(asHtml: false)
      coverImage { large extraLarge }
      type
      format
      status
      episodes
      duration
      genres
      startDate { year month day }
      endDate { year month day }
      staff(sort: RELEVANCE, perPage: 5) {
        edges {
          role
          node { id name { full } description }
        }
      }
    }
  }
}
`;

function cleanDescription(description) {
  if (!description) return null;
  return description
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .trim();
}

function getAnimeTitle(anime) {
  return (
    anime.title.english ||
    anime.title.romaji ||
    anime.title.native ||
    `Anime ${anime.id}`
  );
}

function slugifyTitle(title) {
  return (title || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function toAiredStatus(anilistStatus) {
  const value = (anilistStatus || "").toUpperCase();
  if (value === "RELEASING") return AnimeAiredStatus.AIRING;
  if (value === "FINISHED") return AnimeAiredStatus.FINISHED;
  if (value === "HIATUS") return AnimeAiredStatus.HIATUS;
  if (value === "CANCELLED") return AnimeAiredStatus.CANCELLED;
  return AnimeAiredStatus.NOT_YET_RELEASED;
}

function fuzzyDateToDate(fuzzyDate) {
  if (!fuzzyDate || !fuzzyDate.year) return null;
  const month = fuzzyDate.month || 1;
  const day = fuzzyDate.day || 1;
  const date = new Date(Date.UTC(fuzzyDate.year, month - 1, day));
  return Number.isNaN(date.getTime()) ? null : date;
}

function getAnimeType(anime, typesByName) {
  const candidates = [anime.format, anime.type].filter(Boolean);
  for (const candidate of candidates) {
    if (typesByName[candidate]) {
      return typesByName[candidate];
    }
  }
  const values = Object.values(typesByName);
  return values[0] || null;
}

function getGenres(anime, genresByName) {
  const genres = [];
  for (const genreName of anime.genres || []) {
    const genre = genresByName[genreName];
    if (genre) genres.push(genre);
  }
  return genres;
}

function getUniqueAuthorLinks(anime, adminAuthorsByAniListId) {
  const linksByAuthorId = new Map();

  for (const edge of anime.staff?.edges || []) {
    const aniListId = edge.node?.id;
    if (!aniListId) continue;

    const author = adminAuthorsByAniListId[String(aniListId)];
    if (!author) continue;

    if (!linksByAuthorId.has(author.id)) {
      linksByAuthorId.set(author.id, {
        authorId: author.id,
        role: edge.role || "Staff",
      });
    }
  }

  return Array.from(linksByAuthorId.values());
}

async function filterExistingAuthorLinks(prisma, userId, authorLinks) {
  if (!authorLinks.length) {
    return [];
  }

  const existing = await prisma.animeAuthor.findMany({
    where: {
      userId,
      id: { in: authorLinks.map((link) => link.authorId) },
    },
    select: { id: true },
  });
  const existingIds = new Set(existing.map((row) => row.id));

  return authorLinks.filter((link) => existingIds.has(link.authorId));
}

function extensionFromContentType(contentType) {
  const mime = (contentType || "").toLowerCase();
  if (mime.includes("jpeg") || mime.includes("jpg")) return "jpg";
  if (mime.includes("png")) return "png";
  if (mime.includes("webp")) return "webp";
  if (mime.includes("gif")) return "gif";
  return "jpg";
}

function r2PublicUrl(key) {
  const base =
    process.env.R2_PUBLIC_BASE_URL || process.env.CF_PUBLIC_ACCESS_URL;
  if (!base) {
    throw new Error(
      "R2 public URL is required for AniList image upload seeding (set R2_PUBLIC_BASE_URL or CF_PUBLIC_ACCESS_URL).",
    );
  }
  const normalized = base.endsWith("/") ? base : `${base}/`;
  return `${normalized}${key}`;
}

function validateR2Env() {
  const required = [
    "CF_BUCKET",
    "CF_ENDPOINT",
    "CF_ACCESS_KEY_ID",
    "CF_ACCESS_SECRET",
  ];
  const missing = required.filter((key) => !process.env[key]);
  const hasPublicUrl = Boolean(
    process.env.R2_PUBLIC_BASE_URL || process.env.CF_PUBLIC_ACCESS_URL,
  );
  if (!hasPublicUrl) {
    missing.push("R2_PUBLIC_BASE_URL|CF_PUBLIC_ACCESS_URL");
  }
  if (missing.length) {
    throw new Error(
      `Missing required R2 env vars for seeding: ${missing.join(", ")}`,
    );
  }
}

async function uploadRemoteCoverToR2(imageUrl, animeId, cache) {
  if (!imageUrl) {
    return cover(`covers/fallback-${animeId}.jpg`);
  }
  if (cache.has(imageUrl)) {
    return cache.get(imageUrl);
  }

  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw new Error(
      `Failed downloading AniList image: ${response.status} ${response.statusText}`,
    );
  }

  const contentType = response.headers.get("content-type") || "image/jpeg";
  const extension = extensionFromContentType(contentType);
  const bytes = Buffer.from(await response.arrayBuffer());
  const key = `covers/anilist/${animeId}-${crypto.randomUUID()}.${extension}`;

  await r2Client.send(
    new PutObjectCommand({
      Bucket: process.env.CF_BUCKET,
      Key: key,
      Body: bytes,
      ContentType: contentType,
    }),
  );

  const url = r2PublicUrl(key);
  cache.set(imageUrl, url);
  return url;
}

async function fetchAnimePage(page, perPage = 150, status = null) {
  const response = await fetch(ANILIST_API, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      query: ANIME_QUERY,
      variables: { page, perPage, ...(status ? { status } : {}) },
    }),
  });

  if (!response.ok) {
    throw new Error(
      `AniList request failed: ${response.status} ${response.statusText}`,
    );
  }

  const result = await response.json();
  if (result.errors) {
    throw new Error(`AniList GraphQL error: ${JSON.stringify(result.errors)}`);
  }
  return result.data.Page;
}

// Share of the seeded list per AniList status; airing is intentionally the largest.
const STATUS_MIX = [
  ["RELEASING", 0.4],
  ["FINISHED", 0.4],
  ["NOT_YET_RELEASED", 0.12],
  ["HIATUS", 0.04],
  ["CANCELLED", 0.04],
];

async function fetchByStatus(status, count, seenIds) {
  const collected = [];
  let page = 1;

  while (collected.length < count) {
    const result = await fetchAnimePage(page, 25, status);
    for (const item of result.media) {
      if (collected.length >= count) break;
      if (seenIds.has(item.id)) continue;
      seenIds.add(item.id);
      collected.push(item);
    }
    if (!result.pageInfo.hasNextPage) break;
    page += 1;
  }

  return collected;
}

function seededShuffle(items, seed = 42) {
  const result = [...items];
  let state = seed;
  const random = () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

async function fetchActualAnime(limit = 100) {
  const seenIds = new Set();
  let anime = [];

  for (const [status, share] of STATUS_MIX) {
    anime.push(...(await fetchByStatus(status, Math.round(limit * share), seenIds)));
  }

  // Top up from airing, then finished, if a rare status (hiatus/cancelled) came up short.
  for (const status of ["RELEASING", "FINISHED"]) {
    if (anime.length >= limit) break;
    anime.push(...(await fetchByStatus(status, limit - anime.length, seenIds)));
  }

  // Shuffle so view counts (assigned by index) aren't grouped by status.
  anime = seededShuffle(anime.slice(0, limit));
  return anime;
}

async function seedAnimeForAdmin(
  prisma,
  user,
  animeList,
  adminAuthorsByAniListId,
  genresByName,
  typesByName,
) {
  validateR2Env();
  const imageCache = new Map();

  for (let index = 0; index < animeList.length; index += 1) {
    const anime = animeList[index];
    const title = getAnimeTitle(anime);
    const type = getAnimeType(anime, typesByName);
    const genres = getGenres(anime, genresByName);
    const authorCandidates = getUniqueAuthorLinks(
      anime,
      adminAuthorsByAniListId,
    );
    const authors = await filterExistingAuthorLinks(
      prisma,
      user.id,
      authorCandidates,
    );

    const watchStatus = STATUSES[index % STATUSES.length];
    const airedStatus = toAiredStatus(anime.status);
    const slugBase = slugifyTitle(title) || `anime-${anime.id}`;
    const slug = `${slugBase}-${anime.id}`;
    const airedFrom = fuzzyDateToDate(anime.startDate);
    const airedTo = fuzzyDateToDate(anime.endDate);

    const selectedGenres = genres.slice(0, 3);
    if (selectedGenres.length === 0) {
      const fallback = Object.values(genresByName)[0];
      if (fallback) selectedGenres.push(fallback);
    }

    const sourceCoverUrl =
      anime.coverImage?.extraLarge || anime.coverImage?.large || null;
    const coverImageUrl = await uploadRemoteCoverToR2(
      sourceCoverUrl,
      anime.id,
      imageCache,
    );

    const episodeCount = Math.min(anime.episodes || 0, 5);
    const episodeSeedData =
      episodeCount > 0
        ? Array.from({ length: episodeCount }, (_, episodeIndex) => ({
            episodeNumber: episodeIndex + 1,
            title: `Episode ${episodeIndex + 1}`,
            durationMinutes: anime.duration || 24,
          }))
        : [];

    const entry = await prisma.animeEntry.create({
      data: {
        userId: user.id,
        title,
        description:
          cleanDescription(anime.description) || `Imported anime: ${title}.`,
        slug,
        coverImageUrl,
        airedStatus,
        airedFrom,
        airedTo,
        viewCount: Math.max(0, animeList.length - index),
        notes: `Imported from AniList. AniList ID: ${anime.id}`,
        typeId: type?.id || null,
        genreLinks: {
          create: selectedGenres.map((genre) => ({ genreId: genre.id })),
        },
        ...(episodeSeedData.length
          ? {
              episodes: {
                createMany: {
                  data: episodeSeedData,
                },
              },
            }
          : {}),
      },
    });

    for (const authorLink of authors) {
      try {
        await prisma.animeEntryAuthor.create({
          data: {
            animeEntryId: entry.id,
            authorId: authorLink.authorId,
            role: authorLink.role,
          },
        });
      } catch (error) {
        if (error && error.code === "P2003") {
          continue;
        }
        if (error && error.code === "P2002") {
          continue;
        }
        throw error;
      }
    }

    await prisma.userAnimeStatus.upsert({
      where: {
        userId_animeEntryId: { userId: user.id, animeEntryId: entry.id },
      },
      update: { status: watchStatus },
      create: {
        userId: user.id,
        animeEntryId: entry.id,
        status: watchStatus,
      },
    });

    console.log(
      `Seeded anime entry: ${entry.id} - ${title} for user: ${user.email}`,
    );

    console.log(anime.id, anime.title, `Seeded for user: ${user.email}`);
  }
}

async function seedAnime(
  prisma,
  users,
  authorsByUserEmail,
  adminAuthorsByAniListId,
  animeList,
  genresByName,
  typesByName,
) {
  const adminUser = users.find((user) => user.email === "demo1@anime.local");

  if (!adminUser) {
    throw new Error("Admin seed user demo1@anime.local was not found.");
  }

  await seedAnimeForAdmin(
    prisma,
    adminUser,
    animeList,
    adminAuthorsByAniListId,
    genresByName,
    typesByName,
  );
}

module.exports = {
  fetchActualAnime,
  seedAnime,
};
