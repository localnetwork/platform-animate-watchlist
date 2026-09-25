const { createHttpError } = require('../utils/httpError');

const VALID_STATUSES = ['PLANNED', 'WATCHING', 'COMPLETED', 'DROPPED'];
const COVER_IMAGE_REGEX = /^https?:\/\/.+/i;

function normalizeStatus(status) {
  if (!status) return undefined;
  const normalized = status.toUpperCase();
  return VALID_STATUSES.includes(normalized) ? normalized : null;
}

function validateStatus(status) {
  const normalizedStatus = normalizeStatus(status);
  if (status && !normalizedStatus) {
    throw createHttpError(400, `Invalid status. Use one of: ${VALID_STATUSES.join(', ')}`);
  }
  return normalizedStatus;
}

function validateRating(rating) {
  if (rating !== undefined && rating !== null && (rating < 1 || rating > 10)) {
    throw createHttpError(400, 'Rating must be between 1 and 10');
  }
}

function validateCoverImageUrl(coverImageUrl, required) {
  if (!coverImageUrl && required) {
    throw createHttpError(400, 'coverImageUrl is required and must be a valid URL');
  }
  if (coverImageUrl !== undefined && coverImageUrl !== null && !COVER_IMAGE_REGEX.test(coverImageUrl)) {
    throw createHttpError(400, 'coverImageUrl is required and must be a valid URL');
  }

  const r2PublicBaseUrl = process.env.R2_PUBLIC_BASE_URL;
  if (coverImageUrl && r2PublicBaseUrl && !coverImageUrl.startsWith(r2PublicBaseUrl)) {
    throw createHttpError(400, `coverImageUrl must start with ${r2PublicBaseUrl}`);
  }
}

function validateAuthorIds(authorIds, required) {
  if (authorIds === undefined && !required) return;
  if (!Array.isArray(authorIds)) {
    throw createHttpError(400, 'authorIds must be an array');
  }
}

function validateGenreIds(genreIds, required) {
  if (genreIds === undefined && !required) return;
  if (!Array.isArray(genreIds)) {
    throw createHttpError(400, 'genreIds must be an array');
  }
}

function validateTypeId(typeId) {
  if (typeId !== undefined && typeId !== null && typeof typeId !== 'string') {
    throw createHttpError(400, 'typeId must be a string');
  }
}

function validateCreateAnimeInput(payload) {
  const { title, description, coverImageUrl, status, rating, authorIds, genreIds, typeId } = payload;

  if (!title || !description) {
    throw createHttpError(400, 'title and description are required');
  }
  validateCoverImageUrl(coverImageUrl, true);
  validateStatus(status);
  validateRating(rating);
  validateAuthorIds(authorIds, false);
  validateGenreIds(genreIds, false);
  validateTypeId(typeId);
}

function validateUpdateAnimeInput(payload) {
  const { coverImageUrl, status, rating, authorIds, genreIds, typeId } = payload;
  validateStatus(status);
  validateRating(rating);

  if (coverImageUrl !== undefined) {
    validateCoverImageUrl(coverImageUrl, false);
  }
  if (authorIds !== undefined) {
    validateAuthorIds(authorIds, false);
  }
  if (genreIds !== undefined) {
    validateGenreIds(genreIds, false);
  }
  validateTypeId(typeId);
}

function validateEpisodeNumber(episodeNumber, required) {
  if (episodeNumber === undefined && !required) return;
  if (!Number.isInteger(episodeNumber) || episodeNumber <= 0) {
    throw createHttpError(400, 'episodeNumber must be a positive integer');
  }
}

function toAnimeResponse(entry) {
  const currentUserRating = entry.ratings && entry.ratings.length ? entry.ratings[0].value : null;

  return {
    id: entry.id,
    title: entry.title,
    description: entry.description,
    coverImageUrl: entry.coverImageUrl,
    status: entry.status,
    rating: currentUserRating,
    notes: entry.notes,
    createdAt: entry.createdAt,
    updatedAt: entry.updatedAt,
    episodes: entry.episodes,
    type: entry.type ? { id: entry.type.id, name: entry.type.name } : null,
    genres: (entry.genreLinks || []).map((link) => ({
      id: link.genre.id,
      name: link.genre.name,
    })),
    authors: entry.authorLinks.map((link) => ({
      id: link.author.id,
      name: link.author.name,
      bio: link.author.bio,
      role: link.role,
      createdAt: link.author.createdAt,
      updatedAt: link.author.updatedAt,
    })),
  };
}

module.exports = {
  VALID_STATUSES,
  normalizeStatus,
  validateStatus,
  validateRating,
  validateCreateAnimeInput,
  validateUpdateAnimeInput,
  validateEpisodeNumber,
  toAnimeResponse,
};
