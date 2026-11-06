const prisma = require('../config/prisma');

async function listAll() {
  return prisma.genre.findMany({ orderBy: { name: 'asc' } });
}

async function create(name) {
  return prisma.genre.create({ data: { name } });
}

async function update(id, name) {
  return prisma.genre.update({ where: { id }, data: { name } });
}

async function remove(id) {
  return prisma.genre.delete({ where: { id } });
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
  create,
  update,
  remove,
  findManyByIds,
};
