// Local import
const db = require('../../db');
const sQuery = require('../../db/items/get');

module.exports = {
  detail: (params, cb) => {
    db.query(sQuery.detail, params, (err, rows) => { cb(err, rows); })
  },

  list: (params, cb) => {
    db.query(sQuery.list, params, (err, rows) => { cb(err, rows); })
  },

  rate: (params, cb) => {
    db.query(sQuery.rate, params, (err, rows) => { cb(err, rows); })
  }
};
