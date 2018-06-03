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

const memorystorage = multer.memoryStorage();
const upload = multer({ storage: memorystorage });

router.post('/upload', upload.array('input field name'), (req, res, next) => {
  req.files.forEach((fileObj, index) => {
    fileObj.buffer;
    fileObj.originalname;
    fileObj.mimetype;

    aws.config.region = 'ap-northeast-2';
    aws.config.update({
      accessKeyId: 'AKIAJHAOFQZPM5DDGSQA',
      secretAccessKey: '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',
    });

    const s3_params = {
      Bucket: 'colorize.io',
      Key: fileObj.originalname,
      ACL: 'public-read',
      ContentType: fileObj.mimetype,
    };

    const s3obj = new aws.S3({ params: s3_params });
    s3obj.upload({ Body: fileObj.buffer })
      .on('httpUploadProgress', (evt) => { console.log(evt); })
      .send((err, data) => {
        const url = data.Location;
      });
  });
});
