const router = require('express').Router();
const multer = require('multer');
const auth = require('../middleware/auth');
const { requireAnyPermission } = require('../middleware/rbac');
const { PERMISSIONS } = require('../models/permissions');
const { uploadCover, uploadEpisodeVideo } = require('../controllers/uploadController');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

const uploadVideo = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 500 * 1024 * 1024 },
});

router.use(auth);

router.post(
  '/cover',
  requireAnyPermission([PERMISSIONS.ANIME_CREATE, PERMISSIONS.ANIME_UPDATE]),
  upload.single('file'),
  uploadCover,
);

router.post(
  '/episode-video',
  requireAnyPermission([PERMISSIONS.ANIME_EPISODE_MANAGE]),
  uploadVideo.single('file'),
  uploadEpisodeVideo,
);

module.exports = router;
