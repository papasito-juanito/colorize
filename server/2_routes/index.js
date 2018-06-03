// Global import
const router = require('express').Router();

// Local import
router.use('/', require('./21_api'));

module.exports = router;

// Global import
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

// Local import
const { multerAWS } = require('../0_config');

const s3 = new aws.S3({ multerAWS });
const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'colorize.io',
    metadata(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key(req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

router.post('/upload', upload.array('photos', 3), (req, res) => {
  res.send('Successfully uploaded files!');
});
