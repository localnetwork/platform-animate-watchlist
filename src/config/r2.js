const { S3Client } = require('@aws-sdk/client-s3');

const r2Client = new S3Client({
  region: 'auto',
  endpoint: process.env.CF_ENDPOINT,
  credentials: {
    accessKeyId: process.env.CF_ACCESS_KEY_ID,
    secretAccessKey: process.env.CF_ACCESS_SECRET,
  },
});

module.exports = r2Client;
