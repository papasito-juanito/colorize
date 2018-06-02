// Local import
const db = require('../../db');
const sQuery = require('../../db/wishLists/delete');

module.exports = (params, cb) => {
  db.query(sQuery, params, (err, rows) => { cb(err, rows); })
};
