const router = require('express').Router();
const auth = require('../middleware/auth');
const { list, create, update, remove } = require('../controllers/authorController');
const { requirePermission } = require('../middleware/rbac');
const { PERMISSIONS } = require('../models/permissions');

router.use(auth);

router.get('/', requirePermission(PERMISSIONS.AUTHOR_READ), list);
router.post('/', requirePermission(PERMISSIONS.AUTHOR_CREATE), create);
router.put('/:id', requirePermission(PERMISSIONS.AUTHOR_UPDATE), update);
router.delete('/:id', requirePermission(PERMISSIONS.AUTHOR_DELETE), remove);

module.exports = router;
