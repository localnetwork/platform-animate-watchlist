const crypto = require('crypto');
const { PutObjectCommand } = require('@aws-sdk/client-s3');
const r2Client = require('../config/r2');
const { createHttpError } = require('../utils/httpError');

const ALLOWED_MIME_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

function extensionForMimeType(mimeType) {
  switch (mimeType) {
    case 'image/jpeg':
      return 'jpg';
    case 'image/png':
      return 'png';
    case 'image/webp':
      return 'webp';
    case 'image/gif':
      return 'gif';
    default:
      return 'bin';
  }
}

function publicUrlFor(key) {
  const base = process.env.CF_PUBLIC_ACCESS_URL || '';
  const normalized = base.endsWith('/') ? base : `${base}/`;
  return `${normalized}${key}`;
}

async function uploadCoverImage(file) {
  if (!file) {
    throw createHttpError(400, 'No file was provided');
  }
  if (!ALLOWED_MIME_TYPES.has(file.mimetype)) {
    throw createHttpError(400, 'Only JPEG, PNG, WEBP or GIF images are allowed');
  }
  if (file.size > MAX_FILE_SIZE_BYTES) {
    throw createHttpError(400, 'Image must be 5MB or smaller');
  }

  const key = `covers/${crypto.randomUUID()}.${extensionForMimeType(file.mimetype)}`;

  await r2Client.send(
    new PutObjectCommand({
      Bucket: process.env.CF_BUCKET,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    }),
  );

  return { url: publicUrlFor(key), key };
}

module.exports = {
  uploadCoverImage,
};
