// Global import
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');

// Local import
const { port, secret } = require('../config');
const router = require('./routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(fileUpload());
app.use('/api', router);
app.use('/', express.static(path.join(__dirname, './../client/build')));

app.post('/upload', function(req, res) {
  console.log(req.files)
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.file;
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('../../client/src/assets/reviews', function(err) {
    if (err){
      return res.status(500).send(err);
    }
    res.send('File uploaded!');
  });
});

app.set('jwt-secret', secret); 

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './../client/build/index.html'))
// });

app.listen(port, () => {
  console.log(`[server    ] opening express server on port ${port}...`)
});

module.exports = app;
