const genreRepository = require('../repositories/genreRepository');

const { createHttpError } = require('../utils/httpError');

function normalizeName(name) {
  const value = typeof name === 'string' ? name.trim() : '';
  if (!value) throw createHttpError(400, 'Name is required');
  return value;
}

async function list() {
  return genreRepository.listAll();
}

async function create(name) {
  return genreRepository.create(normalizeName(name));
}

async function update(id, name) {
  return genreRepository.update(id, normalizeName(name));
}

async function remove(id) {
  return genreRepository.remove(id);
}

module.exports = {
  list,
  create,
  update,
  remove,
};
