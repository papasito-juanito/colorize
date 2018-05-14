// Local import
const db = require('../../db');
const queryStr = require('../../db/Items');

const Item = function(queryStr, cb) {
  db.query(queryStr, function(err, row) {
    console.log();
    cb(err, row)
  })
}

module.exports = Item;
