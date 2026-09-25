const typeService = require('../services/typeService');

async function list(req, res, next) {
  try {
    const types = await typeService.list();
    res.json(types);
  } catch (err) {
    next(err);
  }
}

module.exports = { list };
