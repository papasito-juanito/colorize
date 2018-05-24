// Local import
const db = require('../../db');
const queryStr = require('../../db/wishLists/get');

module.exports = (params, cb) => {
  db.query(sQuery, params, (err, rows) => { cb(err, rows); })
};
