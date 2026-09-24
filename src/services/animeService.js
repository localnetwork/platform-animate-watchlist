const animeRepository = require('../repositories/animeRepository');
const { createHttpError } = require('../utils/httpError');
const {
  validateCreateAnimeInput,
  validateUpdateAnimeInput,
  validateEpisodeNumber,
  validateStatus,
  toAnimeResponse,
} = require('../models/animeModel');

function ensureOwnedAuthors(authorIds, ownedAuthors) {
  if (authorIds.length && ownedAuthors.length !== authorIds.length) {
    throw createHttpError(400, 'One or more authorIds are invalid');
  }
}

async function list(userId, query) {
  const { status, search } = query;
  const filter = { userId };

  const normalizedStatus = validateStatus(status);
  if (normalizedStatus) {
    filter.status = normalizedStatus;
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
  const { title, description, coverImageUrl, status, rating, notes } = payload;
  const authorIds = payload.authorIds || [];

  const ownedAuthors = await animeRepository.findOwnedAuthorsByIds(userId, authorIds);
  ensureOwnedAuthors(authorIds, ownedAuthors);

  const normalizedStatus = status ? validateStatus(status) : undefined;
  const entry = await animeRepository.createEntryForUser(userId, {
    title,
    description,
    coverImageUrl,
    status: normalizedStatus || undefined,
    notes,
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

  const normalizedStatus = payload.status ? validateStatus(payload.status) : undefined;
  const entry = await animeRepository.updateEntryByIdForUser(existing.id, userId, {
    title: payload.title ?? undefined,
    description: payload.description ?? undefined,
    coverImageUrl: payload.coverImageUrl ?? undefined,
    status: normalizedStatus || undefined,
    notes: payload.notes ?? undefined,
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

module.exports = {
  list,
  getOne,
  create,
  update,
  remove,
  addEpisode,
  updateEpisode,
  removeEpisode,
  attachAuthor,
  detachAuthor,
};
