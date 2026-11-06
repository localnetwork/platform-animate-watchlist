const typeRepository = require('../repositories/typeRepository');

const { createHttpError } = require('../utils/httpError');

function normalizeName(name) {
  const value = typeof name === 'string' ? name.trim() : '';
  if (!value) throw createHttpError(400, 'Name is required');
  return value;
}

async function list() {
  return typeRepository.listAll();
}

async function create(name) {
  return typeRepository.create(normalizeName(name));
}

async function update(id, name) {
  return typeRepository.update(id, normalizeName(name));
}

async function remove(id) {
  return typeRepository.remove(id);
}

module.exports = {
  list,
  create,
  update,
  remove,
};
