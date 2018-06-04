// Global import
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

// Local import
const { credentials, bucket } = require('../../0_config');

module.exports = (req, res) => {
  console.log('[6_utility ] activated upload');

  const s3 = new aws.S3({ credentials });
  const upload = multer({
    storage: multerS3({
      s3,
      bucket,
      acl: 'public-read',
      cacheControl: 'max-age=31536000',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      storageClass: 'REDUCED_REDUNDANCY',
      metadata(req, file, cb) {
        cb(null, { originalName: file.originalname });
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
      res.json({ success: true, meesage: req.file.location });
    }
  });
};
