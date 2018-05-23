// Local import
const db = require('../../db');
const sQuery = require('../../db/items/get');

module.exports = {
  detail: (params, cb) => {
    db.detail.query(sQuery, params, (err, rows) => { cb(err, rows); })
  },

  list: (params, cb) => {
    db.list.query(sQuery, params, (err, rows) => { cb(err, rows); })
  },

  rate: (params, cb) => {
    db.rate.query(sQuery, params, (err, rows) => { cb(err, rows); })
  }
};
