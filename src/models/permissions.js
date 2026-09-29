const PERMISSIONS = {
  AUTH_ME_READ: 'auth.me.read',
  AUTH_PROFILE_UPDATE: 'auth.profile.update',
  ANIME_READ: 'anime.read',
  ANIME_CREATE: 'anime.create',
  ANIME_UPDATE: 'anime.update',
  ANIME_DELETE: 'anime.delete',
  ANIME_RATING_MANAGE: 'anime.rating.manage',
  ANIME_STATUS_MANAGE: 'anime.status.manage',
  ANIME_FAVORITE_MANAGE: 'anime.favorite.manage',
  ANIME_EPISODE_MANAGE: 'anime.episode.manage',
  ANIME_AUTHOR_LINK_MANAGE: 'anime.author_link.manage',
  AUTHOR_READ: 'author.read',
  AUTHOR_CREATE: 'author.create',
  AUTHOR_UPDATE: 'author.update',
  AUTHOR_DELETE: 'author.delete',
  GENRE_MANAGE: 'genre.manage',
  TYPE_MANAGE: 'type.manage',
};

const ALL_PERMISSION_VALUES = Object.values(PERMISSIONS);

module.exports = {
  PERMISSIONS,
  ALL_PERMISSION_VALUES,
};
