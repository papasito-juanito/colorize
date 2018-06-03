// Global import
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

// Local import
const { multerAWS } = require('../../0_config');

const s3 = new aws.S3({ multerAWS });
 
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'colorize.io',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})
 
app.post('/upload', upload.array('photos', 3), function(req, res, next) {
  res.send('Successfully uploaded ' + req.files.length + ' files!')
})