// Local import
const db = require('../../db');
const queryStr = require('../../db/Reviews');

const Review = function(queryStr, cb) {
  db.query(queryStr, function(err, row) {
    console.log();
    cb(err, row)
  })
}

module.exports = Review;
