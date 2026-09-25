const typeRepository = require('../repositories/typeRepository');

async function list() {
  return typeRepository.listAll();
}

module.exports = {
  list,
};
