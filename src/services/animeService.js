const animeRepository = require('../repositories/animeRepository');
const { createHttpError } = require('../utils/httpError');
const {
  validateCreateAnimeInput,
  validateUpdateAnimeInput,
  validateEpisodeNumber,
  validateStatus,
  validateAiredStatus,
  validateRating,
  toAnimeResponse,
  toPublicAnimeResponse,
  ANIME_INCLUDE_OPTIONS,
} = require('../models/animeModel');

function parseIncludes(raw) {
  if (raw === undefined || raw === null || raw === '') {
    return undefined;
  }
  const requested = String(raw)
    .split(',')
    .map((token) => token.trim())
    .filter(Boolean);
  const valid = requested.filter((token) => ANIME_INCLUDE_OPTIONS.includes(token));
  if (!valid.length) {
    throw createHttpError(400, `Invalid includes. Use comma-separated values from: ${ANIME_INCLUDE_OPTIONS.join(', ')}`);
  }
  return new Set(valid);
}

function buildPublicInclude(includeSet) {
  const include = { ratings: { select: { value: true } } };
  const includeAll = !includeSet;

  if (includeAll || includeSet.has('episodes')) {
    include.episodes = { orderBy: { episodeNumber: 'asc' } };
  }
  if (includeAll || includeSet.has('authors')) {
    include.authorLinks = { include: { author: true } };
  }
  if (includeAll || includeSet.has('genres')) {
    include.genreLinks = { include: { genre: true } };
  }
  if (includeAll || includeSet.has('type')) {
    include.type = true;
  }
  return include;
}

function ensureOwnedAuthors(authorIds, ownedAuthors) {
  if (authorIds.length && ownedAuthors.length !== authorIds.length) {
    throw createHttpError(400, 'One or more authorIds are invalid');
  }
}

function ensureValidGenres(genreIds, existingGenres) {
  if (genreIds.length && existingGenres.length !== genreIds.length) {
    throw createHttpError(400, 'One or more genreIds are invalid');
  }
}

async function ensureValidType(typeId) {
  if (!typeId) return;
  const type = await animeRepository.findTypeById(typeId);
  if (!type) {
    throw createHttpError(400, 'typeId is invalid');
  }
}

async function list(userId, query) {
  const { status, search } = query;
  const filter = { userId };

  const normalizedStatus = validateStatus(status);
  if (normalizedStatus) {
    filter.status = normalizedStatus;
  }

  function slugifyTitle(title) {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 80);
  }

  async function buildUniqueSlug(title) {
    const base = slugifyTitle(title) || 'anime';
    let candidate = base;
    let counter = 2;

    while (true) {
      const existing = await animeRepository.findBySlug(candidate);
      if (!existing) return candidate;
      candidate = `${base}-${counter}`;
      counter += 1;
    }
  }
  if (search) {
    filter.OR = [
      { title: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
    ];
  }

  const entries = await animeRepository.listByUser(userId, filter);
  return entries.map(toAnimeResponse);
}

async function getOne(userId, id) {
  const entry = await animeRepository.findByIdForUser(id, userId);
  if (!entry) {
    throw createHttpError(404, 'Watchlist entry not found');
  }
  return toAnimeResponse(entry);
}

async function create(userId, payload) {
  validateCreateAnimeInput(payload);
  const {
    title,
    description,
    coverImageUrl,
    status,
    airedStatus,
    airedFrom,
    airedTo,
    rating,
    notes,
    typeId,
  } = payload;
  const authorIds = payload.authorIds || [];
  const genreIds = payload.genreIds || [];

  const [ownedAuthors, validGenres] = await Promise.all([
    animeRepository.findOwnedAuthorsByIds(userId, authorIds),
    animeRepository.findGenresByIds(genreIds),
  ]);
  ensureOwnedAuthors(authorIds, ownedAuthors);
  ensureValidGenres(genreIds, validGenres);
  await ensureValidType(typeId);

  const normalizedStatus = status ? validateStatus(status) : undefined;
  const normalizedAiredStatus = airedStatus ? validateAiredStatus(airedStatus) : undefined;
  const slug = await buildUniqueSlug(title);
  const entry = await animeRepository.createEntryForUser(userId, {
    slug,
    title,
    description,
    coverImageUrl,
    status: normalizedStatus || undefined,
    airedStatus: normalizedAiredStatus || undefined,
    airedFrom: airedFrom ? new Date(airedFrom) : undefined,
    airedTo: airedTo ? new Date(airedTo) : undefined,
    notes,
    typeId: typeId || undefined,
    ...(rating !== undefined && rating !== null
      ? {
          ratings: {
            create: {
              userId,
              value: rating,
            },
          },
        }
      : {}),
    authorLinks: {
      create: ownedAuthors.map((author) => ({
        authorId: author.id,
      })),
    },
    genreLinks: {
      create: validGenres.map((genre) => ({
        genreId: genre.id,
      })),
    },
  });

  return toAnimeResponse(entry);
}

async function update(userId, id, payload) {
  validateUpdateAnimeInput(payload);

  const existing = await animeRepository.findEntryRefByIdForUser(id, userId);
  if (!existing) {
    throw createHttpError(404, 'Watchlist entry not found');
  }

  let ownedAuthors = [];
  if (payload.authorIds !== undefined && payload.authorIds.length) {
    ownedAuthors = await animeRepository.findOwnedAuthorsByIds(userId, payload.authorIds);
    ensureOwnedAuthors(payload.authorIds, ownedAuthors);
  }

  let validGenres = [];
  if (payload.genreIds !== undefined && payload.genreIds.length) {
    validGenres = await animeRepository.findGenresByIds(payload.genreIds);
    ensureValidGenres(payload.genreIds, validGenres);
  }

  if (payload.typeId !== undefined) {
    await ensureValidType(payload.typeId);
  }

  const normalizedStatus = payload.status ? validateStatus(payload.status) : undefined;
  const normalizedAiredStatus = payload.airedStatus ? validateAiredStatus(payload.airedStatus) : undefined;
  const shouldRegenerateSlug = payload.title !== undefined && payload.title !== null && payload.title !== '';
  const nextSlug = shouldRegenerateSlug ? await buildUniqueSlug(payload.title) : undefined;
  const entry = await animeRepository.updateEntryByIdForUser(existing.id, userId, {
    ...(nextSlug ? { slug: nextSlug } : {}),
    title: payload.title ?? undefined,
    description: payload.description ?? undefined,
    coverImageUrl: payload.coverImageUrl ?? undefined,
    status: normalizedStatus || undefined,
    ...(payload.airedStatus !== undefined ? { airedStatus: normalizedAiredStatus || null } : {}),
    ...(payload.airedFrom !== undefined
      ? { airedFrom: payload.airedFrom ? new Date(payload.airedFrom) : null }
      : {}),
    ...(payload.airedTo !== undefined ? { airedTo: payload.airedTo ? new Date(payload.airedTo) : null } : {}),
    notes: payload.notes ?? undefined,
    ...(payload.typeId !== undefined ? { typeId: payload.typeId || null } : {}),
    ...(payload.rating !== undefined
      ? payload.rating === null
        ? {
            ratings: {
              deleteMany: {
                userId,
              },
            },
          }
        : {
            ratings: {
              upsert: {
                where: {
                  animeEntryId_userId: {
                    animeEntryId: existing.id,
                    userId,
                  },
                },
                update: { value: payload.rating },
                create: {
                  userId,
                  value: payload.rating,
                },
              },
            },
          }
      : {}),
    ...(payload.authorIds !== undefined
      ? {
          authorLinks: {
            deleteMany: {},
            create: ownedAuthors.map((author) => ({
              authorId: author.id,
            })),
          },
        }
      : {}),
    ...(payload.genreIds !== undefined
      ? {
          genreLinks: {
            deleteMany: {},
            create: validGenres.map((genre) => ({
              genreId: genre.id,
            })),
          },
        }
      : {}),
  });

  return toAnimeResponse(entry);
}

async function remove(userId, id) {
  const existing = await animeRepository.findEntryRefByIdForUser(id, userId);
  if (!existing) {
    throw createHttpError(404, 'Watchlist entry not found');
  }

  await animeRepository.deleteEntryById(existing.id);
}

async function addEpisode(userId, animeEntryId, payload) {
  validateEpisodeNumber(payload.episodeNumber, true);

  const entry = await animeRepository.findEntryRefByIdForUser(animeEntryId, userId);
  if (!entry) {
    throw createHttpError(404, 'Watchlist entry not found');
  }

  return animeRepository.createEpisode({
    animeEntryId: entry.id,
    episodeNumber: payload.episodeNumber,
    title: payload.title,
    description: payload.description,
    durationMinutes: payload.durationMinutes ?? undefined,
    airDate: payload.airDate ? new Date(payload.airDate) : undefined,
  });
}

async function updateEpisode(userId, animeEntryId, episodeId, payload) {
  if (payload.episodeNumber !== undefined) {
    validateEpisodeNumber(payload.episodeNumber, false);
  }

  const existing = await animeRepository.findEpisodeForEntryUser(animeEntryId, episodeId, userId);
  if (!existing) {
    throw createHttpError(404, 'Episode not found');
  }

  return animeRepository.updateEpisodeById(existing.id, {
    episodeNumber: payload.episodeNumber ?? undefined,
    title: payload.title ?? undefined,
    description: payload.description ?? undefined,
    durationMinutes: payload.durationMinutes ?? undefined,
    airDate: payload.airDate ? new Date(payload.airDate) : undefined,
  });
}

async function removeEpisode(userId, animeEntryId, episodeId) {
  const existing = await animeRepository.findEpisodeForEntryUser(animeEntryId, episodeId, userId);
  if (!existing) {
    throw createHttpError(404, 'Episode not found');
  }

  await animeRepository.deleteEpisodeById(existing.id);
}

async function attachAuthor(userId, animeEntryId, authorId, payload) {
  const [entry, author] = await Promise.all([
    animeRepository.findEntryRefByIdForUser(animeEntryId, userId),
    animeRepository.findAuthorByIdForUser(authorId, userId),
  ]);

  if (!entry) {
    throw createHttpError(404, 'Watchlist entry not found');
  }
  if (!author) {
    throw createHttpError(404, 'Author not found');
  }

  const link = await animeRepository.upsertEntryAuthorLink(entry.id, author.id, payload.role);
  return {
    animeEntryId: link.animeEntryId,
    authorId: link.authorId,
    role: link.role,
    author: link.author,
  };
}

async function detachAuthor(userId, animeEntryId, authorId) {
  const existing = await animeRepository.findEntryAuthorLinkForUser(animeEntryId, authorId, userId);
  if (!existing) {
    throw createHttpError(404, 'Author link not found');
  }

  await animeRepository.deleteEntryAuthorLink(existing.animeEntryId, existing.authorId);
}

async function getOwnRating(userId, animeEntryId) {
  const entry = await animeRepository.findEntryRefByIdForUser(animeEntryId, userId);
  if (!entry) {
    throw createHttpError(404, 'Watchlist entry not found');
  }

  const rating = await animeRepository.findRatingForEntryUser(entry.id, userId);
  return {
    animeEntryId: entry.id,
    rating: rating ? rating.value : null,
  };
}

async function setOwnRating(userId, animeEntryId, payload) {
  const entry = await animeRepository.findEntryRefByIdForUser(animeEntryId, userId);
  if (!entry) {
    throw createHttpError(404, 'Watchlist entry not found');
  }

  validateRating(payload.rating);
  if (payload.rating === undefined || payload.rating === null) {
    throw createHttpError(400, 'rating is required');
  }

  const rating = await animeRepository.upsertRatingForEntryUser(entry.id, userId, payload.rating);
  return {
    id: rating.id,
    animeEntryId: rating.animeEntryId,
    rating: rating.value,
    createdAt: rating.createdAt,
    updatedAt: rating.updatedAt,
  };
}

async function removeOwnRating(userId, animeEntryId) {
  const entry = await animeRepository.findEntryRefByIdForUser(animeEntryId, userId);
  if (!entry) {
    throw createHttpError(404, 'Watchlist entry not found');
  }

  const existing = await animeRepository.findRatingForEntryUser(entry.id, userId);
  if (!existing) {
    throw createHttpError(404, 'Rating not found');
  }

  await animeRepository.deleteRatingForEntryUser(entry.id, userId);
}

async function incrementView(userId, animeEntryId) {
  const entry = await animeRepository.findEntryRefByIdForUser(animeEntryId, userId);
  if (!entry) {
    throw createHttpError(404, 'Watchlist entry not found');
  }
  return animeRepository.incrementViewCountById(entry.id);
}

async function topViewed(userId, limit = 10) {
  const capped = Math.max(1, Math.min(50, Number(limit) || 10));
  const rows = await animeRepository.topViewedByUser(userId, capped);
  return rows.map(toAnimeResponse);
}

async function publicList(query) {
  const page = Math.max(1, Number(query.page) || 1);
  const limit = Math.max(1, Math.min(100, Number(query.limit) || 20));
  const skip = (page - 1) * limit;

  const where = {};

  if (query.search) {
    where.OR = [
      { title: { contains: query.search, mode: 'insensitive' } },
      { description: { contains: query.search, mode: 'insensitive' } },
      { slug: { contains: query.search, mode: 'insensitive' } },
    ];
  }

  const normalizedAiredStatus = query.airedStatus ? validateAiredStatus(query.airedStatus) : undefined;
  if (normalizedAiredStatus) {
    where.airedStatus = normalizedAiredStatus;
  }

  if (query.typeId) {
    where.typeId = query.typeId;
  }

  if (query.genreId) {
    const genreIds = String(query.genreId)
      .split(',')
      .map((id) => id.trim())
      .filter(Boolean);
    if (genreIds.length) {
      where.genreLinks = { some: { genreId: { in: genreIds } } };
    }
  }

  const allowedSorts = new Set(['top', 'rated', 'recent']);
  const sort = allowedSorts.has(query.sort) ? query.sort : 'recent';

  const includeSet = parseIncludes(query.includes);
  const include = buildPublicInclude(includeSet);

  const rows = await animeRepository.publicList(where, include);

  const withRating = rows.map((entry) => {
    const values = (entry.ratings || []).map((r) => r.value);
    const ratingCount = values.length;
    const averageRating = ratingCount ? values.reduce((sum, v) => sum + v, 0) / ratingCount : 0;
    return { entry, averageRating, ratingCount };
  });

  if (sort === 'top') {
    withRating.sort((a, b) => b.entry.viewCount - a.entry.viewCount);
  } else if (sort === 'rated') {
    withRating.sort((a, b) => b.averageRating - a.averageRating || b.ratingCount - a.ratingCount);
  } else {
    withRating.sort((a, b) => new Date(b.entry.createdAt) - new Date(a.entry.createdAt));
  }

  const total = withRating.length;
  const paged = withRating.slice(skip, skip + limit);

  return {
    data: paged.map(({ entry, averageRating, ratingCount }) =>
      toPublicAnimeResponse(entry, { averageRating, ratingCount, includeSet })),
    meta: {
      page,
      limit,
      total,
      totalPages: Math.max(1, Math.ceil(total / limit)),
      sort,
      includes: includeSet ? Array.from(includeSet) : ANIME_INCLUDE_OPTIONS,
    },
  };
}

async function manageList(userId, query) {
  const page = Math.max(1, Number(query.page) || 1);
  const limit = Math.max(1, Math.min(100, Number(query.limit) || 20));
  const skip = (page - 1) * limit;

  const where = { userId };

  if (query.search) {
    where.OR = [
      { title: { contains: query.search, mode: 'insensitive' } },
      { description: { contains: query.search, mode: 'insensitive' } },
      { slug: { contains: query.search, mode: 'insensitive' } },
    ];
  }

  const normalizedStatus = query.status ? validateStatus(query.status) : undefined;
  if (normalizedStatus) {
    where.status = normalizedStatus;
  }

  const normalizedAiredStatus = query.airedStatus ? validateAiredStatus(query.airedStatus) : undefined;
  if (normalizedAiredStatus) {
    where.airedStatus = normalizedAiredStatus;
  }

  if (query.typeId) {
    where.typeId = query.typeId;
  }
  if (query.genreId) {
    where.genreLinks = { some: { genreId: query.genreId } };
  }
  if (query.authorId) {
    where.authorLinks = { some: { authorId: query.authorId } };
  }

  const sortBy = query.sortBy || 'updatedAt';
  const sortDir = query.sortDir === 'asc' ? 'asc' : 'desc';
  const allowedSortBy = new Set(['updatedAt', 'createdAt', 'title', 'viewCount', 'airedFrom', 'airedTo']);
  const orderByField = allowedSortBy.has(sortBy) ? sortBy : 'updatedAt';

  const { rows, total } = await animeRepository.listByUserPaginated(
    userId,
    where,
    { [orderByField]: sortDir },
    skip,
    limit,
  );

  return {
    data: rows.map(toAnimeResponse),
    meta: {
      page,
      limit,
      total,
      totalPages: Math.max(1, Math.ceil(total / limit)),
    },
  };
}

module.exports = {
  list,
  manageList,
  topViewed,
  publicList,
  incrementView,
  getOne,
  create,
  update,
  remove,
  addEpisode,
  updateEpisode,
  removeEpisode,
  attachAuthor,
  detachAuthor,
  getOwnRating,
  setOwnRating,
  removeOwnRating,
};
