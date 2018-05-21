// Local import
const db = require('../../db');
const _query = require('../../db/users/login');

module.exports = function(params, cb) {
  db.query(_query, params, function(err, rows) {
    cb(err, rows)
  })
};
