const prisma = require('../config/prisma');

async function listAll() {
  return prisma.animeType.findMany({ orderBy: { name: 'asc' } });
}

async function findById(id) {
  return prisma.animeType.findUnique({ where: { id } });
}

module.exports = {
  listAll,
  findById,
};
