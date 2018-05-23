// Global import
const mysql = require('mysql');

// Local import
const { user, password, database } = require('../../config');

const db = mysql.createConnection({ user, password, database });
db.connect((err) => {
  if (err) throw err;
  console.log('[database  ] connected to mysql server...');
});

module.exports = db;
