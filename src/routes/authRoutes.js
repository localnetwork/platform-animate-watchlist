const router = require('express').Router();
const { register, login, me, updateProfile } = require('../controllers/authController');
const auth = require('../middleware/auth');
const { requirePermission } = require('../middleware/rbac');
const { PERMISSIONS } = require('../models/permissions');

router.post('/register', register);
router.post('/login', login);
router.get('/me', auth, requirePermission(PERMISSIONS.AUTH_ME_READ), me);
router.put('/me', auth, requirePermission(PERMISSIONS.AUTH_PROFILE_UPDATE), updateProfile);

module.exports = router;
