const router = require('express').Router();
const auth = require('../middleware/auth');
const { requirePermission } = require('../middleware/rbac');
const { PERMISSIONS } = require('../models/permissions');
const { list } = require('../controllers/genreController');

router.use(auth);

router.get('/', requirePermission(PERMISSIONS.ANIME_READ), list);

module.exports = router;
