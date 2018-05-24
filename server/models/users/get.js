// Local import
const db = require('../../db');
const _query = require('../../db/users/get');

module.exports = (params, cb) => {
  db.query(sQuery, params, (err, rows) => { cb(err, rows); })
};
