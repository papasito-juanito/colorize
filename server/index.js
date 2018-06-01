/* eslint-disable */

process.env.NODE_ENV = ( process.env.NODE_ENV && ( process.env.NODE_ENV ).trim().toLowerCase() == 'production' ) ? 'production' : 'development';
// Global import
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
<<<<<<< HEAD
const {url} = require('../client/src/config');
const aws = require('aws-sdk');

=======
const { url } = require('../client/src/config');
>>>>>>> 7c4207d336ea5e0efcae158689e1fc6babd61019

// Local import
const { port, secret } = require('../config');
const router = require('./routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api', router);
app.use('/', express.static(path.join(__dirname, './../client/build')));

app.post('/upload', function(req, res) {
  // if (!req.files)
  //   return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let imageFile = req.files.file;
  console.log('__dirname :', __dirname )
  // Use the mv() method to place the file somewhere on your server
  imageFile.mv(`client/src/assets/reviews/${req.body.filename}.jpg`, function(err) {
    if (err){
      return res.status(500).send(err);
    }
    res.json({ file: `../client/src/assets/reviews/${req.body.filename}.jpg` });
  });

});





app.set('jwt-secret', secret); 

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../client/build/index.html'));
});

app.listen(port, () => {
  console.log(`[server    ] opening express server on ${url}...`);
});

module.exports = app;
