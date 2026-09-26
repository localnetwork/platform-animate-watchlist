const router = require('express').Router();
const { list } = require('../controllers/typeController');

// Public, unauthenticated read-only endpoint.
router.get('/', list);

module.exports = router;
