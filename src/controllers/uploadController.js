const uploadService = require('../services/uploadService');

async function uploadCover(req, res, next) {
  try {
    const result = await uploadService.uploadCoverImage(req.file);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = { uploadCover };
