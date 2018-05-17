// Global import
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
// Local import
const router = require('./routes');

const app = express();
const port = 8080;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use(session({
  secret: 'sBl2',
  resave: false,
  saveUninitialized: true
}));

app.use('/', express.static(path.join(__dirname, './../public')));

app.use('/api', router);


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

app.use(function(err, req, res, next) {
console.error(err.stack);
res.status(500).send('[server    ] something broke...');
});

app.listen(port, () => {
  console.log(`[server    ] opening on port ${port}...`);
});

module.exports = app;
