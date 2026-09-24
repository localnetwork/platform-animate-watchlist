const authorService = require('../services/authorService');

async function list(req, res, next) {
  try {
    const authors = await authorService.list(req.user.id);
    res.json(authors);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const author = await authorService.create(req.user.id, req.body);
    res.status(201).json(author);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const author = await authorService.update(req.user.id, req.params.id, req.body);
    res.json(author);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    await authorService.remove(req.user.id, req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = { list, create, update, remove };
