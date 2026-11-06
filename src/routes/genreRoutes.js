const router = require('express').Router();
const auth = require('../middleware/auth');
const { cacheResponses } = require('../utils/cache');
const { list, create, update, remove } = require('../controllers/genreController');
const { requirePermission } = require('../middleware/rbac');
const { PERMISSIONS } = require('../models/permissions');

// Public, unauthenticated read-only endpoint.
router.get('/', cacheResponses(), list);

router.post('/', auth, requirePermission(PERMISSIONS.GENRE_MANAGE), create);
router.put('/:id', auth, requirePermission(PERMISSIONS.GENRE_MANAGE), update);
router.delete('/:id', auth, requirePermission(PERMISSIONS.GENRE_MANAGE), remove);

module.exports = router;
