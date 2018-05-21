// Global import
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

// Local import
const { port, secret } = require('../config');
const router = require('./routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.set('jwt-secret', secret);

app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: true,
}));

app.use('/', express.static(path.join(__dirname, './../build')));

app.use('/api', router);


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../build/index.html'));
});

app.use((err, req, res) => {
  res.status(500).send('[server    ] critical error detected...');
});

app.listen(port, () => {
  console.log(`[server    ] opening express server on port ${port}...`);
});

module.exports = app;
