const prisma = require('../config/prisma');

async function listAll() {
  return prisma.animeType.findMany({ orderBy: { name: 'asc' } });
}

async function findById(id) {
  return prisma.animeType.findUnique({ where: { id } });
}

async function create(name) {
  return prisma.animeType.create({ data: { name } });
}

async function update(id, name) {
  return prisma.animeType.update({ where: { id }, data: { name } });
}

async function remove(id) {
  return prisma.animeType.delete({ where: { id } });
}

module.exports = {
  listAll,
  create,
  update,
  remove,
  findById,
};
