// Local import
const db = require('../../db');
const sQuery = require('../../db/reviews/get');

module.exports = {
  info: (params, cb) => {
    db.query(sQuery.info, params, (err, rows) => { cb(err, rows); })
  },

  list: (params, cb) => {
    db.query(sQuery.list, params, (err, rows) => { cb(err, rows); })
  },

  rank: (params, cb) => {
    db.query(sQuery.rank, params, (err, rows) => { cb(err, rows); })
  },

  user: (params, cb) => {
    db.query(sQuery.user, params, (err, rows) => { cb(err, rows); })
  }
};
