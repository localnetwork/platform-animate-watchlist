const router = require('express').Router();
const { register, login, me, updateProfile } = require('../controllers/authController');
const auth = require('../middleware/auth');
const { cacheResponses } = require('../utils/cache');
const { requirePermission } = require('../middleware/rbac');
const { PERMISSIONS } = require('../models/permissions');

router.post('/register', register);
router.post('/login', login);
router.get('/me', auth, requirePermission(PERMISSIONS.AUTH_ME_READ), cacheResponses({ scope: 'user' }), me);
router.put('/me', auth, requirePermission(PERMISSIONS.AUTH_PROFILE_UPDATE), updateProfile);

module.exports = router;
