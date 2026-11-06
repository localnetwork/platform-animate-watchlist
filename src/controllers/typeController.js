const typeService = require('../services/typeService');

async function list(req, res, next) {
  try {
    const types = await typeService.list();
    res.json(types);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const type = await typeService.create(req.body?.name);
    res.status(201).json(type);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const type = await typeService.update(req.params.id, req.body?.name);
    res.json(type);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    await typeService.remove(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = { list, create, update, remove };
