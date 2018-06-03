// Local import
const db = require('../../db');
const sQuery = require('../../db/users/get');

module.exports = {
  info: (params, cb) => {
    db.query(sQuery.info, params, (err, rows) => { cb(err, rows); })
  }
};
