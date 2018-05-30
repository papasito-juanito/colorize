// Local import
const mysql = require('../8_mysql');

module.exports = (query, params, next) => {
  console.log(`[7_model   ] activated params: ${params}`);
  console.log(`[7_model   ] activated params: ${query}`);
  mysql.query(query, params, (err, rows) => {
    console.log('rows :', rows);
    next(err, rows);
  });
};
