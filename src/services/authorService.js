const authorRepository = require('../repositories/authorRepository');
const { createHttpError } = require('../utils/httpError');
const { validateCreateAuthorInput } = require('../models/authorModel');

async function list(userId) {
  return authorRepository.listByUser(userId);
}

async function create(userId, payload) {
  validateCreateAuthorInput(payload);
  const { name, bio } = payload;
  return authorRepository.createForUser(userId, { name, bio });
}

async function update(userId, id, payload) {
  const existing = await authorRepository.findByIdForUser(id, userId);
  if (!existing) {
    throw createHttpError(404, 'Author not found');
  }

  return authorRepository.updateById(existing.id, {
    name: payload.name ?? undefined,
    bio: payload.bio ?? undefined,
  });
}

async function remove(userId, id) {
  const existing = await authorRepository.findByIdForUser(id, userId);
  if (!existing) {
    throw createHttpError(404, 'Author not found');
  }
  await authorRepository.deleteById(existing.id);
}

module.exports = {
  list,
  create,
  update,
  remove,
};
