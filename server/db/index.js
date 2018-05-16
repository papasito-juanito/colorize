// Global import
const mysql = require('mysql');

// Local import
// const colors = require('./colors');
// const items = require('./items');
// const reviews = require('./reviews');
// const users = require('./users');
// const wishLists = require('./wishLists');

let db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'colorize'
});

db.connect(function(err) {
  if (err) { throw err; }
  console.log('[database  ] connected to mysql server...');
});

module.exports = db;
