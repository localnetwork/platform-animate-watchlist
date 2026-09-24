const router = require('express').Router();
const auth = require('../middleware/auth');
const { requirePermission } = require('../middleware/rbac');
const { PERMISSIONS } = require('../models/permissions');
const {
  list,
  getOne,
  create,
  update,
  remove,
  addEpisode,
  updateEpisode,
  removeEpisode,
  attachAuthor,
  detachAuthor,
} = require('../controllers/animeController');

router.use(auth);

router.get('/', requirePermission(PERMISSIONS.ANIME_READ), list);
router.get('/:id', requirePermission(PERMISSIONS.ANIME_READ), getOne);
router.post('/', requirePermission(PERMISSIONS.ANIME_CREATE), create);
router.put('/:id', requirePermission(PERMISSIONS.ANIME_UPDATE), update);
router.delete('/:id', requirePermission(PERMISSIONS.ANIME_DELETE), remove);
router.post('/:id/episodes', requirePermission(PERMISSIONS.ANIME_EPISODE_MANAGE), addEpisode);
router.put('/:id/episodes/:episodeId', requirePermission(PERMISSIONS.ANIME_EPISODE_MANAGE), updateEpisode);
router.delete('/:id/episodes/:episodeId', requirePermission(PERMISSIONS.ANIME_EPISODE_MANAGE), removeEpisode);
router.post('/:id/authors/:authorId', requirePermission(PERMISSIONS.ANIME_AUTHOR_LINK_MANAGE), attachAuthor);
router.delete('/:id/authors/:authorId', requirePermission(PERMISSIONS.ANIME_AUTHOR_LINK_MANAGE), detachAuthor);

module.exports = router;
