process.env.NODE_ENV = (process.env.NODE_ENV && (process.env.NODE_ENV).trim().toLowerCase() == 'production') ? 'production' : 'development';
// Global import
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
// const aws = require('aws-sdk');

// Local import
const config = require('./../0_config');
const router = require('./../2_routes');
const { url } = require('../../client/src/config');

const app = express();

/*
*/

// const s3 = new aws.S3();

// const multerS3 = require('multer-s3');


// aws.config.update({
//   secretAccessKey: '1eTlxvPd3s2OfUM+duR20FnmQsbXk95vElNhGX7y',
//   accessKeyId: 'AKIAJHAOFQZPM5DDGSQA',
//   region: 'ap-northeast-2',
// });

// const upload = multer({
//   storage: multerS3({
//     s3,
//     bucket: 'colorize.io',
//     key(req, file, cb) {
//       console.log(file);
//       cb(null, file.originalname); // use Date.now() for unique file keys
//     },
//   }),
// });


app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api', router);
app.use('/', express.static(path.join(__dirname, './../../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../../client/build/index.html'));
});

app.listen(config.express.port, () => {
  console.log(`[1_express ] activated on ${url}...`);
});

module.exports = app;
