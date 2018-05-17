// Local import
const db = require('../../db');
const queryStr = require('../../db/reviews/myReview');

module.exports = function(params, cb) {
  console.log(`[model     ] received params like from controller...`)
  console.log(`[model     ] send query like to database...`);
  db.query(queryStr, params, function(err, rows) {
    cb(err, rows)
  })
}
