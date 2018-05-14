//load dependencies
const express = require('express');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const session = require('express-session');
// const cors = require('cors');
// const mysql = require('mysql');

//load config
// const config = require('./config');
const port = process.env.port || 8080;

//express configuration
const app = express();

//parse JSON and url-encoded query
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//print request log
// app.use(morgan('dev'));
// app.use(cors());
// app.set('jwt-secret', 'SBL2');

//session configuration
// app.use(session({
//   secret: 'Super_Babo_Legend_II',
//   resave: false,
//   saveUninitialized: true
// }));

//view engine configuration
// app.use(express.static('public'));
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

//open express server
app.listen(port, function() {
  console.log(`[server    ] opening on port ${port}...`);
});

// app.use('/', require('./routes'));

//connect mysql server
// const db = mysql.createConnection({
//   user: 'root',
//   password: '',
//   database: 'simplyAnalytics'
// });

// db.connect(function(err) {
//   if (err) { throw err; }
//   console.log('[database  ] connected to mysql server...');
// });
