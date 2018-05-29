// Local import
const mysql = require('../8_mysql');

module.exports = (query, params, next) => {
  console.log(`[7_model   ] activated params: ${params}`);

  mysql.query(query, params, (err, rows) => {
    next(err, rows);
  });
};
