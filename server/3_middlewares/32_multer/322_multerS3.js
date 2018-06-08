// Global import
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

// Local import
const { credentials, bucket } = require('../../0_config');

module.exports = (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('[322_middle] activated multerS3 to upload');
  }

  const s3 = new aws.S3({ credentials });
  const upload = multer({
    storage: multerS3({
      size: 1024,
      s3,
      bucket: (req.headers.id)
        ? `${bucket}/${req.originalUrl.split('/')[2]}/${req.headers.id}`
        : `${bucket}/${req.originalUrl.split('/')[2]}/${req.user_id}`,
      acl: 'public-read',
      cacheControl: 'max-age=31536000',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      storageClass: 'REDUCED_REDUNDANCY',
      metadata(req, file, cb) {
        cb(null, { fieldName: file.fieldname });
      },
      key(req, file, cb) {
        cb(null, `${Date.now().toString()}_${file.originalname}`);
      },
    }),
  }).single('file');

  upload(req, res, (err) => {
    if (err) {
      res.json({ success: false, message: err.message });
    } else {
      res.json({ success: true, message: req.file.location });
    }
  });
};
