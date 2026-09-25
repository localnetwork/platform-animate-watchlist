const genreService = require('../services/genreService');

async function list(req, res, next) {
  try {
    const genres = await genreService.list();
    res.json(genres);
  } catch (err) {
    next(err);
  }
}

module.exports = { list };
