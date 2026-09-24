const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authRepository = require('../repositories/authRepository');
const { createHttpError } = require('../utils/httpError');
const { validateRegisterInput, validateLoginInput, toAuthResponse, toUserProfile } = require('../models/authModel');

function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
}

async function register(payload) {
  validateRegisterInput(payload);
  const { email, password, name } = payload;

  const existing = await authRepository.findUserByEmail(email);
  if (existing) {
    throw createHttpError(409, 'Email is already registered');
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await authRepository.createUser({ email, password: hashed, name });
  const memberRole = await authRepository.findRoleByName('member');
  if (!memberRole) {
    throw createHttpError(500, 'Default member role is not configured');
  }
  await authRepository.assignRoleToUser(user.id, memberRole.id);

  const authUser = await authRepository.findUserProfileById(user.id);
  const token = generateToken(authUser);
  return toAuthResponse(authUser, token);
}

async function login(payload) {
  validateLoginInput(payload);
  const { email, password } = payload;

  const user = await authRepository.findUserByEmail(email);
  if (!user) {
    throw createHttpError(401, 'Invalid email or password');
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw createHttpError(401, 'Invalid email or password');
  }

  const authUser = await authRepository.findUserProfileById(user.id);
  const token = generateToken(authUser);
  return toAuthResponse(authUser, token);
}

async function me(userId) {
  const user = await authRepository.findUserProfileById(userId);
  return toUserProfile(user);
}

module.exports = {
  register,
  login,
  me,
};
