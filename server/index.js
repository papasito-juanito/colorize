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
app.use(session({ secret: secret, resave: false, saveUninitialized: true }));
app.use('/api', router);
app.use('/', express.static(path.join(__dirname, './../build')));
// app.use((err, req, res) => { res.status(500).send('[server    ] critical error detected...') });

app.get('*', (req, res) => { res.sendFile(path.resolve(__dirname, './../build/index.html')) });
app.get('/', (req, res) => { sess = req.session });

app.listen(port, () => { console.log(`[server    ] opening express server on port ${port}...`) });

module.exports = app;
