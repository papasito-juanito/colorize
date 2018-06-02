// Local import
const db = require('../../db');
const sQuery = require('../../db/wishLists/get');

module.exports = {
  check: (params, cb) => {
    db.query(sQuery.check, params, (err, rows) => { cb(err, rows); })
  },

  list: (params, cb) => {
    db.query(sQuery.list, params, (err, rows) => { cb(err, rows); })
  }
};