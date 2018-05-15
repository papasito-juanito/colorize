// Local import
const db = require('../../db');
const queryStr = require('../../db/Reviews/DelReview');

const delReview = function(queryStr, cb) {
  db.query(queryStr, function(err, rows) {
    console.log('[model     ] fetch rows from reviews table in database...');
    cb(err, rows)
  })
}

module.exports = delReview;
