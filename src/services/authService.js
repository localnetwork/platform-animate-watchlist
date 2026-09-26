const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authRepository = require('../repositories/authRepository');
const { createHttpError } = require('../utils/httpError');
const {
  validateRegisterInput,
  validateLoginInput,
  validateUpdateProfileInput,
  toAuthResponse,
  toUserProfile,
  toPublicUserProfile,
} = require('../models/authModel');

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

async function updateProfile(userId, payload) {
  validateUpdateProfileInput(payload);
  const existing = await authRepository.findUserById(userId);
  if (!existing) {
    throw createHttpError(404, 'User not found');
  }

  const updateData = {};
  if (Object.prototype.hasOwnProperty.call(payload, 'name')) {
    updateData.name = payload.name;
  }
  if (Object.prototype.hasOwnProperty.call(payload, 'password')) {
    const valid = await bcrypt.compare(payload.currentPassword, existing.password);
    if (!valid) {
      throw createHttpError(401, 'Current password is incorrect');
    }
    updateData.password = await bcrypt.hash(payload.password, 10);
  }
  if (Object.prototype.hasOwnProperty.call(payload, 'bio')) {
    updateData.bio = payload.bio;
  }
  if (Object.prototype.hasOwnProperty.call(payload, 'avatarUrl')) {
    updateData.avatarUrl = payload.avatarUrl;
  }
  if (Object.prototype.hasOwnProperty.call(payload, 'socialLinks')) {
    updateData.socialLinks = payload.socialLinks;
  }
  if (Object.prototype.hasOwnProperty.call(payload, 'username')) {
    const normalizedUsername =
      payload.username === null ? null : payload.username.toLowerCase();
    if (normalizedUsername !== null) {
      const owner = await authRepository.findUserByUsername(normalizedUsername);
      if (owner && owner.id !== userId) {
        throw createHttpError(409, 'Username is already taken');
      }
    }
    updateData.username = normalizedUsername;
  }

  await authRepository.updateUserById(userId, updateData);
  const updated = await authRepository.findUserProfileById(userId);
  return toUserProfile(updated);
}

async function getPublicProfile(username) {
  if (!username || typeof username !== 'string') {
    throw createHttpError(400, 'username is required');
  }
  const user = await authRepository.findUserByUsername(username.toLowerCase());
  if (!user) {
    throw createHttpError(404, 'Profile not found');
  }
  return toPublicUserProfile(user);
}

module.exports = {
  register,
  login,
  me,
  updateProfile,
  getPublicProfile,
};
