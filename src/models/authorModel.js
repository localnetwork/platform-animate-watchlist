const { createHttpError } = require('../utils/httpError');

function validateCreateAuthorInput(payload) {
  if (!payload.name) {
    throw createHttpError(400, 'name is required');
  }
}

module.exports = {
  validateCreateAuthorInput,
};
