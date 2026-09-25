const genreRepository = require('../repositories/genreRepository');

async function list() {
  return genreRepository.listAll();
}

module.exports = {
  list,
};
