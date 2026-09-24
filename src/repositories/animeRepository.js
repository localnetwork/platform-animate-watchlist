const prisma = require('../config/prisma');

function includeForUserRating(userId) {
  return {
    episodes: { orderBy: { episodeNumber: 'asc' } },
    authorLinks: { include: { author: true } },
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
  findByIdForUser,
  findEntryRefByIdForUser,
  findOwnedAuthorsByIds,
  createEntryForUser,
  updateEntryByIdForUser,
  deleteEntryById,
  createEpisode,
  findEpisodeForEntryUser,
  updateEpisodeById,
  deleteEpisodeById,
  findAuthorByIdForUser,
  upsertEntryAuthorLink,
  findEntryAuthorLinkForUser,
  deleteEntryAuthorLink,
};
