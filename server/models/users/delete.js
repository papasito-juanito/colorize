// Local import
const db = require('../../db');
const _query = require('../../db/users/delete');

module.exports = (params, cb) => { db.query(_query, params, (err, rows) => { cb(err, rows) }) }
