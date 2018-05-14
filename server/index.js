// Global import
const express = require('express');
const path = require('path');

const morgan = require('morgan'); // HTTP REQUEST LOGGER
const bodyParser = require('body-parser'); // PARSE HTML BODY

const session = require('express-session');

const api = require('./routes');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());

/* use session */
app.use(session({
  secret: 'CodeLab1$1$234',
  resave: false,
  saveUninitialized: true
}));

app.use('/', express.static(path.join(__dirname, './../public')));

/* setup routers & static directory */
app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

/* handle error */
app.use(function(err, req, res, next) {
console.error(err.stack);
res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`[server    ] opening on port ${port}...`, port);
});

// //load config
// // const config = require('./config');
// const port = process.env.port || 8080;

// //express configuration
// const app = express();

// //parse JSON and url-encoded query
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// //print request log
// app.use(morgan('dev'));
// app.use(cors());
// app.set('jwt-secret', 'SBL2');

// //session configuration
// app.use(session({
//   secret: 'Super_Babo_Legend_II',
//   resave: false,
//   saveUninitialized: true
// }));

// //view engine configuration
// app.use('/', express.static(path.join(__dirname, './../public')));
// // app.set('view engine', 'ejs');
// // app.engine('html', require('ejs').renderFile);

// //open express server
// app.listen(port, function() {
//   console.log(`[server    ] opening on port ${port}...`);
// });

// app.use('/', require('./routes'));

//connect mysql server
const db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'simplyAnalytics'
});

db.connect(function(err) {
  if (err) { throw err; }
  console.log('[database  ] connected to mysql server...');
});
