const prisma = require('../config/prisma');

async function listAll() {
  return prisma.genre.findMany({ orderBy: { name: 'asc' } });
}

async function findManyByIds(ids) {
  if (!ids.length) return [];
  return prisma.genre.findMany({
    where: { id: { in: ids } },
    select: { id: true },
  });
}

module.exports = {
  listAll,
  findManyByIds,
};
