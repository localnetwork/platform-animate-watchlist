const router = require('express').Router();
const { publicProfile } = require('../controllers/authController');
const { cacheResponses } = require('../utils/cache');

// Public, unauthenticated profile lookup by username.
router.get('/:username', cacheResponses(), publicProfile);

module.exports = router;
