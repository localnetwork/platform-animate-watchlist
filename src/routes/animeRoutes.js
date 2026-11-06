const router = require('express').Router();
const auth = require('../middleware/auth');
const { cacheResponses } = require('../utils/cache');
const { requirePermission } = require('../middleware/rbac');
const { PERMISSIONS } = require('../models/permissions');
const {
  list,
  manageList,
  topViewed,
  incrementView,
  getOne,
  create,
  update,
  remove,
  addEpisode,
  updateEpisode,
  removeEpisode,
  attachAuthor,
  detachAuthor,
  getOwnRating,
  setOwnRating,
  removeOwnRating,
  getOwnStatus,
  setOwnStatus,
  removeOwnStatus,
  getOwnFavorite,
  addFavorite,
  removeFavorite,
  listFavorites,
  listRatings,
} = require('../controllers/animeController');

router.use(auth);

router.get('/manage/animes', requirePermission(PERMISSIONS.ANIME_READ), cacheResponses({ scope: 'user' }), manageList);
router.get('/top-viewed', requirePermission(PERMISSIONS.ANIME_READ), cacheResponses({ scope: 'user' }), topViewed);
router.get('/favorites', requirePermission(PERMISSIONS.ANIME_FAVORITE_MANAGE), cacheResponses({ scope: 'user' }), listFavorites);
router.get('/ratings', requirePermission(PERMISSIONS.ANIME_RATING_MANAGE), cacheResponses({ scope: 'user' }), listRatings);
router.get('/', requirePermission(PERMISSIONS.ANIME_READ), cacheResponses({ scope: 'user' }), list);
router.get('/:id', requirePermission(PERMISSIONS.ANIME_READ), cacheResponses({ scope: 'user' }), getOne);
router.post('/', requirePermission(PERMISSIONS.ANIME_CREATE), create);
router.put('/:id', requirePermission(PERMISSIONS.ANIME_UPDATE), update);
router.delete('/:id', requirePermission(PERMISSIONS.ANIME_DELETE), remove);
router.post('/:id/episodes', requirePermission(PERMISSIONS.ANIME_EPISODE_MANAGE), addEpisode);
router.put('/:id/episodes/:episodeId', requirePermission(PERMISSIONS.ANIME_EPISODE_MANAGE), updateEpisode);
router.delete('/:id/episodes/:episodeId', requirePermission(PERMISSIONS.ANIME_EPISODE_MANAGE), removeEpisode);
router.post('/:id/authors/:authorId', requirePermission(PERMISSIONS.ANIME_AUTHOR_LINK_MANAGE), attachAuthor);
router.delete('/:id/authors/:authorId', requirePermission(PERMISSIONS.ANIME_AUTHOR_LINK_MANAGE), detachAuthor);
router.get('/:id/rating', requirePermission(PERMISSIONS.ANIME_RATING_MANAGE), cacheResponses({ scope: 'user' }), getOwnRating);
router.put('/:id/rating', requirePermission(PERMISSIONS.ANIME_RATING_MANAGE), setOwnRating);
router.delete('/:id/rating', requirePermission(PERMISSIONS.ANIME_RATING_MANAGE), removeOwnRating);
router.get('/:id/status', requirePermission(PERMISSIONS.ANIME_STATUS_MANAGE), cacheResponses({ scope: 'user' }), getOwnStatus);
router.put('/:id/status', requirePermission(PERMISSIONS.ANIME_STATUS_MANAGE), setOwnStatus);
router.delete('/:id/status', requirePermission(PERMISSIONS.ANIME_STATUS_MANAGE), removeOwnStatus);
router.get('/:id/favorite', requirePermission(PERMISSIONS.ANIME_FAVORITE_MANAGE), cacheResponses({ scope: 'user' }), getOwnFavorite);
router.put('/:id/favorite', requirePermission(PERMISSIONS.ANIME_FAVORITE_MANAGE), addFavorite);
router.delete('/:id/favorite', requirePermission(PERMISSIONS.ANIME_FAVORITE_MANAGE), removeFavorite);
router.post('/:id/view', requirePermission(PERMISSIONS.ANIME_READ), incrementView);

module.exports = router;
