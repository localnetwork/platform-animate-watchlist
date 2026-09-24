const { createHttpError } = require('../utils/httpError');

function validateRegisterInput(payload) {
  const { email, password } = payload;

  if (!email || !password) {
    throw createHttpError(400, 'Email and password are required');
  }
  if (password.length < 6) {
    throw createHttpError(400, 'Password must be at least 6 characters');
  }
}

function validateLoginInput(payload) {
  const { email, password } = payload;
  if (!email || !password) {
    throw createHttpError(400, 'Email and password are required');
  }
}

function toAuthResponse(user, token) {
  const roles = (user.roleLinks || []).map((link) => link.role.name);
  const permissions = [
    ...new Set(
      (user.roleLinks || [])
        .flatMap((link) => link.role.permissions || [])
        .map((entry) => entry.permission.name),
    ),
  ];

  return {
    token,
    user: { id: user.id, email: user.email, name: user.name, roles, permissions },
  };
}

function toUserProfile(user) {
  const roles = (user.roleLinks || []).map((link) => link.role.name);
  const permissions = [
    ...new Set(
      (user.roleLinks || [])
        .flatMap((link) => link.role.permissions || [])
        .map((entry) => entry.permission.name),
    ),
  ];

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    createdAt: user.createdAt,
    roles,
    permissions,
  };
}

module.exports = {
  validateRegisterInput,
  validateLoginInput,
  toAuthResponse,
  toUserProfile,
};
