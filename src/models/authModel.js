const { createHttpError } = require('../utils/httpError');

const USERNAME_REGEX = /^[a-z0-9](?:[a-z0-9_.-]{1,28}[a-z0-9])?$/i;
const MAX_BIO_LENGTH = 500;
const MAX_SOCIAL_LINKS = 10;
const ALLOWED_SOCIAL_PLATFORMS = new Set([
  'twitter',
  'instagram',
  'facebook',
  'youtube',
  'tiktok',
  'twitch',
  'discord',
  'github',
  'website',
  'other',
]);

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

function validateSocialLinks(socialLinks) {
  if (!Array.isArray(socialLinks)) {
    throw createHttpError(400, 'socialLinks must be an array');
  }
  if (socialLinks.length > MAX_SOCIAL_LINKS) {
    throw createHttpError(400, `socialLinks cannot contain more than ${MAX_SOCIAL_LINKS} entries`);
  }

  return socialLinks.map((link, index) => {
    if (!link || typeof link !== 'object') {
      throw createHttpError(400, `socialLinks[${index}] must be an object`);
    }
    const { platform, url } = link;
    if (typeof platform !== 'string' || !ALLOWED_SOCIAL_PLATFORMS.has(platform.toLowerCase())) {
      throw createHttpError(
        400,
        `socialLinks[${index}].platform must be one of: ${[...ALLOWED_SOCIAL_PLATFORMS].join(', ')}`,
      );
    }
    if (typeof url !== 'string' || !/^https?:\/\/.+/i.test(url)) {
      throw createHttpError(400, `socialLinks[${index}].url must be a valid http(s) URL`);
    }
    return { platform: platform.toLowerCase(), url };
  });
}

function validateUpdateProfileInput(payload) {
  const hasName = Object.prototype.hasOwnProperty.call(payload, 'name');
  const hasPassword = Object.prototype.hasOwnProperty.call(payload, 'password');
  const hasUsername = Object.prototype.hasOwnProperty.call(payload, 'username');
  const hasBio = Object.prototype.hasOwnProperty.call(payload, 'bio');
  const hasAvatarUrl = Object.prototype.hasOwnProperty.call(payload, 'avatarUrl');
  const hasSocialLinks = Object.prototype.hasOwnProperty.call(payload, 'socialLinks');

  if (!hasName && !hasPassword && !hasUsername && !hasBio && !hasAvatarUrl && !hasSocialLinks) {
    throw createHttpError(
      400,
      'At least one of name, username, bio, avatarUrl, password or socialLinks is required',
    );
  }

  if (hasName && payload.name !== null && typeof payload.name !== 'string') {
    throw createHttpError(400, 'name must be a string or null');
  }

  if (hasPassword) {
    if (typeof payload.password !== 'string' || payload.password.length < 6) {
      throw createHttpError(400, 'Password must be at least 6 characters');
    }
    if (typeof payload.currentPassword !== 'string' || !payload.currentPassword) {
      throw createHttpError(400, 'Current password is required to set a new password');
    }
  }

  if (hasUsername) {
    if (payload.username !== null) {
      if (typeof payload.username !== 'string' || !USERNAME_REGEX.test(payload.username)) {
        throw createHttpError(
          400,
          'username must be 3-30 characters, letters/numbers/underscore/dot/hyphen only, and cannot start or end with a symbol',
        );
      }
    }
  }

  if (hasBio) {
    if (payload.bio !== null) {
      if (typeof payload.bio !== 'string' || payload.bio.length > MAX_BIO_LENGTH) {
        throw createHttpError(400, `bio must be a string of ${MAX_BIO_LENGTH} characters or fewer`);
      }
    }
  }

  if (hasAvatarUrl) {
    if (payload.avatarUrl !== null && typeof payload.avatarUrl !== 'string') {
      throw createHttpError(400, 'avatarUrl must be a string or null');
    }
  }

  if (hasSocialLinks) {
    if (payload.socialLinks !== null) {
      validateSocialLinks(payload.socialLinks);
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
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      username: user.username,
      avatarUrl: user.avatarUrl,
      roles,
      permissions,
    },
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
    username: user.username,
    bio: user.bio,
    avatarUrl: user.avatarUrl,
    socialLinks: user.socialLinks || [],
    createdAt: user.createdAt,
    roles,
    permissions,
  };
}

function toPublicUserProfile(user) {
  return {
    id: user.id,
    username: user.username,
    name: user.name,
    bio: user.bio,
    avatarUrl: user.avatarUrl,
    socialLinks: user.socialLinks || [],
    createdAt: user.createdAt,
  };
}

module.exports = {
  validateRegisterInput,
  validateLoginInput,
  validateUpdateProfileInput,
  toAuthResponse,
  toUserProfile,
  toPublicUserProfile,
};
