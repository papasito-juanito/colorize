// Global import
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const hsts = require('hsts');

// Local import
const { port } = require('./../0_config');
const router = require('./../2_routes');
const { url } = require('../../client/src/config');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api', router);
app.use('/', express.static(path.join(__dirname, './../../client/build')));
app.use(hsts({
  maxAge: 15552000,
}));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../../client/build/index.html'));
});

app.listen(port, () => {
  console.log(`[1_express ] activated on ${process.env.NODE_ENV} mode ${url}...`);
});

module.exports = app;
