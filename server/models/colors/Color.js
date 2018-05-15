// Local import
const db = require('../../db');
const queryStr = require('../../db/Colors/Color');

const colors = function(queryStr, cb) {
  db.query(queryStr, function(err, rows) {
    console.log('[model     ] fetch rows from colors table in database...');
    cb(err, rows)
  })
}

module.exports = colors;
