const genreService = require('../services/genreService');

async function list(req, res, next) {
  try {
    const genres = await genreService.list();
    res.json(genres);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const genre = await genreService.create(req.body?.name);
    res.status(201).json(genre);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const genre = await genreService.update(req.params.id, req.body?.name);
    res.json(genre);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    await genreService.remove(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = { list, create, update, remove };
