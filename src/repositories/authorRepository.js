const prisma = require('../config/prisma');

async function listByUser(userId) {
  return prisma.animeAuthor.findMany({
    where: { userId },
    orderBy: { name: 'asc' },
  });
}

async function createForUser(userId, data) {
  return prisma.animeAuthor.create({
    data: {
      ...data,
      userId,
    },
  });
}

async function findByIdForUser(id, userId) {
  return prisma.animeAuthor.findFirst({
    where: { id, userId },
  });
}

async function updateById(id, data) {
  return prisma.animeAuthor.update({
    where: { id },
    data,
  });
}

async function deleteById(id) {
  return prisma.animeAuthor.delete({
    where: { id },
  });
}

module.exports = {
  listByUser,
  createForUser,
  findByIdForUser,
  updateById,
  deleteById,
};
