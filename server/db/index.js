// Global import
const mysql = require('mysql');

// Local import
const Users = require('./Users');
const Colors = require('./Colors');
const Items = require('./Items');
const Reviews = require('./Reviews');
const WishLists = require('/WishLists');

const db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'colorize'
});

db.connect(function(err) {
  if (err) { throw err; }
  console.log('[database  ] connected to mysql server...');
});

db = { Users, Colors, Items, Reviews, WishLists };

module.exports = db;
