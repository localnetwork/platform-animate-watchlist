const router = require('express').Router();
const { publicProfile } = require('../controllers/authController');

// Public, unauthenticated profile lookup by username.
router.get('/:username', publicProfile);

module.exports = router;
