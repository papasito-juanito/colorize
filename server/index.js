// Global import
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

// Local import
const { port, secret } = require('../config');
const router = require('./routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(session({secret, resave: false, saveUninitialized: true}));
app.use('/api', router);
app.use('/', express.static(path.join(__dirname, './../client/build')));

app.get('*', (req, res) => {res.sendFile(path.resolve(__dirname, './../client/build/index.html'))});

app.listen(port, () => { console.log(`[server    ] opening express server on port ${port}...`)});

module.exports = app;
