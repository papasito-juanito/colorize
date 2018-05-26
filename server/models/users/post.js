// Local import
const db = require('../../db');
const sQuery = require('../../db/users/post');

module.exports = {
  signup: (params, cb) => {
    db.query(sQuery, params, (err, rows) => { cb(err, rows); })
  },


  login: (params, cb) => {
    db.query(sQuery.login, params, (err, rows) => { cb(err, rows); })
  }
}