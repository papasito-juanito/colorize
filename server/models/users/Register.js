// Local import
const db = require('../../db');
const queryStr = require('../../db/users/register');

module.exports = function(params, cb) {
  console.log('@@')
  console.log('@@')
  console.log('@@')
  console.log('parmas', params)
  // console.log(`[model     ] send query like '${query}' to database...`);
  db.query(queryStr, params, function(err, rows) {
    console.log('[model     ] fetch rows from users table in database...');
    cb(err, rows)
  })
}

// module.exports = register;
