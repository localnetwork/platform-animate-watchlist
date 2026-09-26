const prisma = require('../config/prisma');

function includeForUserRating(userId) {
  return {
    episodes: { orderBy: { episodeNumber: 'asc' } },
    authorLinks: { include: { author: true } },
    genreLinks: { include: { genre: true } },
    type: true,
    ratings: {
      where: { userId },
      select: { value: true },
      take: 1,
    },
  };
}

async function listByUser(userId, filter) {
  return prisma.animeEntry.findMany({
    where: filter,
    orderBy: { updatedAt: 'desc' },
    include: includeForUserRating(userId),
  });
}

async function listByUserPaginated(userId, where, orderBy, skip, take) {
  const [rows, total] = await Promise.all([
    prisma.animeEntry.findMany({
      where,
      orderBy,
      skip,
      take,
      include: includeForUserRating(userId),
    }),
    prisma.animeEntry.count({ where }),
  ]);

  return { rows, total };
}

async function findByIdForUser(id, userId) {
  return prisma.animeEntry.findFirst({
    where: { id, userId },
    include: includeForUserRating(userId),
  });
}

async function findEntryRefByIdForUser(id, userId) {
  return prisma.animeEntry.findFirst({
    where: { id, userId },
    select: { id: true },
  });
}

async function findOwnedAuthorsByIds(userId, authorIds) {
  if (!authorIds.length) return [];
  return prisma.animeAuthor.findMany({
    where: {
      id: { in: authorIds },
      userId,
    },
    select: { id: true },
  });
}

async function findGenresByIds(genreIds) {
  if (!genreIds.length) return [];
  return prisma.genre.findMany({
    where: { id: { in: genreIds } },
    select: { id: true },
  });
}

async function findTypeById(typeId) {
  if (!typeId) return null;
  return prisma.animeType.findUnique({
    where: { id: typeId },
    select: { id: true },
  });
}

async function createEntryForUser(userId, data) {
  return prisma.animeEntry.create({
    data: {
      ...data,
      userId,
    },
    include: includeForUserRating(userId),
  });
}

async function updateEntryByIdForUser(id, userId, data) {
  return prisma.animeEntry.update({
    where: { id },
    data,
    include: includeForUserRating(userId),
  });
}

async function deleteEntryById(id) {
  return prisma.animeEntry.delete({ where: { id } });
}

async function findBySlugForUser(slug, userId) {
  return prisma.animeEntry.findFirst({
    where: { slug, userId },
    select: { id: true, slug: true },
  });
}

async function findBySlug(slug) {
  return prisma.animeEntry.findFirst({
    where: { slug },
    select: { id: true, slug: true },
  });
}

async function findPublicBySlug(slug) {
  return prisma.animeEntry.findFirst({
    where: { slug },
    include: {
      episodes: { orderBy: { episodeNumber: 'asc' } },
      authorLinks: { include: { author: true } },
      genreLinks: { include: { genre: true } },
      type: true,
      ratings: { select: { value: true } },
    },
  });
}

async function incrementViewCountById(id) {
  return prisma.animeEntry.update({
    where: { id },
    data: { viewCount: { increment: 1 } },
    select: { id: true, viewCount: true },
  });
}

async function topViewedByUser(userId, limit) {
  return prisma.animeEntry.findMany({
    where: { userId },
    orderBy: [{ viewCount: 'desc' }, { updatedAt: 'desc' }],
    take: limit,
    include: includeForUserRating(userId),
  });
}

async function publicList(where, include) {
  return prisma.animeEntry.findMany({
    where,
    include,
  });
}

async function findRatingForEntryUser(animeEntryId, userId) {
  return prisma.animeRating.findUnique({
    where: {
      animeEntryId_userId: {
        animeEntryId,
        userId,
      },
    },
  });
}

async function upsertRatingForEntryUser(animeEntryId, userId, value) {
  return prisma.animeRating.upsert({
    where: {
      animeEntryId_userId: {
        animeEntryId,
        userId,
      },
    },
    update: { value },
    create: {
      animeEntryId,
      userId,
      value,
    },
  });
}

async function deleteRatingForEntryUser(animeEntryId, userId) {
  return prisma.animeRating.delete({
    where: {
      animeEntryId_userId: {
        animeEntryId,
        userId,
      },
    },
  });
}

async function createEpisode(data) {
  return prisma.animeEpisode.create({ data });
}

async function findEpisodeForEntryUser(entryId, episodeId, userId) {
  return prisma.animeEpisode.findFirst({
    where: {
      id: episodeId,
      animeEntry: { id: entryId, userId },
    },
  });
}

async function updateEpisodeById(id, data) {
  return prisma.animeEpisode.update({
    where: { id },
    data,
  });
}

async function deleteEpisodeById(id) {
  return prisma.animeEpisode.delete({
    where: { id },
  });
}

async function findAuthorByIdForUser(authorId, userId) {
  return prisma.animeAuthor.findFirst({
    where: { id: authorId, userId },
    select: { id: true },
  });
}

async function upsertEntryAuthorLink(animeEntryId, authorId, role) {
  return prisma.animeEntryAuthor.upsert({
    where: {
      animeEntryId_authorId: {
        animeEntryId,
        authorId,
      },
    },
    update: { role: role ?? undefined },
    create: {
      animeEntryId,
      authorId,
      role: role ?? undefined,
    },
    include: { author: true },
  });
}

async function findEntryAuthorLinkForUser(animeEntryId, authorId, userId) {
  return prisma.animeEntryAuthor.findFirst({
    where: {
      animeEntryId,
      authorId,
      animeEntry: { userId },
    },
    select: { animeEntryId: true, authorId: true },
  });
}

async function deleteEntryAuthorLink(animeEntryId, authorId) {
  return prisma.animeEntryAuthor.delete({
    where: {
      animeEntryId_authorId: {
        animeEntryId,
        authorId,
      },
    },
  });
}

module.exports = {
  listByUser,
  listByUserPaginated,
  findByIdForUser,
  findEntryRefByIdForUser,
  findBySlugForUser,
  findBySlug,
  findPublicBySlug,
  findOwnedAuthorsByIds,
  findGenresByIds,
  findTypeById,
  createEntryForUser,
  updateEntryByIdForUser,
  deleteEntryById,
  incrementViewCountById,
  topViewedByUser,
  publicList,
  findRatingForEntryUser,
  upsertRatingForEntryUser,
  deleteRatingForEntryUser,
  createEpisode,
  findEpisodeForEntryUser,
  updateEpisodeById,
  deleteEpisodeById,
  findAuthorByIdForUser,
  upsertEntryAuthorLink,
  findEntryAuthorLinkForUser,
  deleteEntryAuthorLink,
};
