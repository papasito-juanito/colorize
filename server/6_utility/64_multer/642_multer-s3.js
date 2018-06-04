// Global import
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

// Local import
const { multerAWS } = require('../../0_config');

module.exports = (req, res, next) => {
  console.log('req.files: ', req.files);
  console.lof('multerAWS: ', multerAWS);
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
  
  app.post('/upload', upload.array('photos', 3), (req, res, next) => {
    res.send(`Successfully uploaded ${req.files.length} files!`);
};
});
