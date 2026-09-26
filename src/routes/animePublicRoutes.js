const router = require('express').Router();
const { publicList } = require('../controllers/animeController');

// Public, unauthenticated catalog of anime entries.
// Query params:
//   sort     - 'top' (most viewed), 'rated' (highest average rating), 'recent' (newest first, default)
//   genreId  - filter by genre id (comma-separated for multiple)
//   typeId   - filter by anime type id
//   search   - text search across title/description/slug
//   page     - page number (default 1)
//   limit    - page size (default 20, max 100)
router.get('/', publicList);

module.exports = router;
