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

function validateUpdateProfileInput(payload) {
  const hasName = Object.prototype.hasOwnProperty.call(payload, 'name');
  const hasPassword = Object.prototype.hasOwnProperty.call(payload, 'password');

  if (!hasName && !hasPassword) {
    throw createHttpError(400, 'At least one of name or password is required');
  }

  if (hasName && payload.name !== null && typeof payload.name !== 'string') {
    throw createHttpError(400, 'name must be a string or null');
  }

  if (hasPassword) {
    if (typeof payload.password !== 'string' || payload.password.length < 6) {
      throw createHttpError(400, 'Password must be at least 6 characters');
    }
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
  validateUpdateProfileInput,
  toAuthResponse,
  toUserProfile,
};
