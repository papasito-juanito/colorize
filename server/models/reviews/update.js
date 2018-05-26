// Local import
const db = require('../../db');
const sQuery = require('../../db/reviews/update');

module.exports = {
  message: (params, cb) => {
    db.query(sQuery, params, (err, rows) => { cb(err, rows); })
  },

  like: {
    true: (params, cb) => {
      db.query(sQuery.like.true, params, (err, rows) => { cb(err, rows); })
    },

    false: (params, cb) => {
      db.query(sQuery.like.false, params, (err, rows) => { cb(err, rows); })
    }
  }
}
