const PERMISSIONS = {
  AUTH_ME_READ: 'auth.me.read',
  ANIME_READ: 'anime.read',
  ANIME_CREATE: 'anime.create',
  ANIME_UPDATE: 'anime.update',
  ANIME_DELETE: 'anime.delete',
  ANIME_EPISODE_MANAGE: 'anime.episode.manage',
  ANIME_AUTHOR_LINK_MANAGE: 'anime.author_link.manage',
  AUTHOR_READ: 'author.read',
  AUTHOR_CREATE: 'author.create',
  AUTHOR_UPDATE: 'author.update',
  AUTHOR_DELETE: 'author.delete',
};

const ALL_PERMISSION_VALUES = Object.values(PERMISSIONS);

module.exports = {
  PERMISSIONS,
  ALL_PERMISSION_VALUES,
};
