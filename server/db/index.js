// Global import
const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'colorize'
});

db.connect(function(err) {
  if (err) { throw err; }
  console.log('[database  ] connected to mysql server...');
});

module.exports = db;
