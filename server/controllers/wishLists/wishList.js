// Local import
const db = require('../../db');
const queryStr = require('../../db/WishLists/WishList');

const wishList = function(queryStr, cb) {
  db.query(queryStr, function(err, rows) {
    console.log('[model     ] fetch rows from wishLists table in database...');
    cb(err, rows)
  })
}

module.exports = wishList;
