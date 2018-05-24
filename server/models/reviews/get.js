// Local import
const db = require('../../db');
const sQuery = require('../../db/reviews/get');

module.exports = {
  info: (params, cb) => {
    db.info.query(sQuery, params, (err, rows) => { cb(err, rows); })
  },

  list: (params, cb) => {
    db.list.query(sQuery, params, (err, rows) => { cb(err, rows); })
  },

  rank: (params, cb) => {
    db.rank.query(sQuery, params, (err, rows) => { cb(err, rows); })
  },

  user: (params, cb) => {
    db.user.query(sQuery, params, (err, rows) => { cb(err, rows); })
  }
};
