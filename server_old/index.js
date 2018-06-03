/* eslint-disable */

process.env.NODE_ENV = ( process.env.NODE_ENV && ( process.env.NODE_ENV ).trim().toLowerCase() == 'production' ) ? 'production' : 'development';
// Global import
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

// Local import
const { port } = require('../config');
const { url } = require('../../client/src/config');
const router = require('./routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api', router);
app.use('/', express.static(path.join(__dirname, './../../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../../client/build/index.html'));
});

app.listen(port, () => {
  console.log(`[server    ] opening express server on ${url}...`);
});

module.exports = app;
