// Local import
const db = require('../../db');

const colors = function(query, cb) {
  db.query(query, function(err, rows) {
    console.log('[model     ] fetch rows from colors table in database...');
    cb(err, rows)
  })
}

module.exports = colors;
