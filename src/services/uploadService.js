const crypto = require('crypto');
const { PutObjectCommand } = require('@aws-sdk/client-s3');
const r2Client = require('../config/r2');
const { createHttpError } = require('../utils/httpError');

const ALLOWED_MIME_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

const ALLOWED_VIDEO_MIME_TYPES = new Set([
  'video/mp4',
  'video/webm',
  'video/ogg',
  'video/quicktime',
  'video/x-matroska',
]);
const MAX_VIDEO_FILE_SIZE_BYTES = 500 * 1024 * 1024; // 500MB

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

function extensionForVideoMimeType(mimeType) {
  switch (mimeType) {
    case 'video/mp4':
      return 'mp4';
    case 'video/webm':
      return 'webm';
    case 'video/ogg':
      return 'ogv';
    case 'video/quicktime':
      return 'mov';
    case 'video/x-matroska':
      return 'mkv';
    default:
      return 'bin';
  }
}

function publicUrlFor(key) {
  const base = process.env.R2_PUBLIC_BASE_URL || process.env.CF_PUBLIC_ACCESS_URL || '';
  if (!base) {
    throw createHttpError(500, 'R2 public base URL is not configured');
  }
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

async function uploadAvatarImage(file) {
  if (!file) {
    throw createHttpError(400, 'No file was provided');
  }
  if (!ALLOWED_MIME_TYPES.has(file.mimetype)) {
    throw createHttpError(400, 'Only JPEG, PNG, WEBP or GIF images are allowed');
  }
  if (file.size > MAX_FILE_SIZE_BYTES) {
    throw createHttpError(400, 'Image must be 5MB or smaller');
  }

  const key = `avatars/${crypto.randomUUID()}.${extensionForMimeType(file.mimetype)}`;

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

async function uploadEpisodeVideo(file) {
  if (!file) {
    throw createHttpError(400, 'No file was provided');
  }
  if (!ALLOWED_VIDEO_MIME_TYPES.has(file.mimetype)) {
    throw createHttpError(400, 'Only MP4, WEBM, OGG, MOV or MKV videos are allowed');
  }
  if (file.size > MAX_VIDEO_FILE_SIZE_BYTES) {
    throw createHttpError(400, 'Video must be 500MB or smaller');
  }

  const key = `episodes/${crypto.randomUUID()}.${extensionForVideoMimeType(file.mimetype)}`;

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
  uploadAvatarImage,
  uploadEpisodeVideo,
};
