// Global import
const mysql = require('mysql');

// Local import
const User = require('./Users');
const Color = require('./Colors');
const Item = require('./Items');
const Review = require('./Reviews');

const db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'colorize'
});

db.connect(function(err) {
  if (err) { throw err; }
  console.log('[database  ] connected to mysql server...');
});

db = { User, Color, Item, Review };

module.exports = db;