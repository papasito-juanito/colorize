// Local import
const mysql = require('../8_mysql');

module.exports = (query, params) => new Promise((resolve, reject) => {
  console.log(`[7_model   ] activated params: ${params}`);

  mysql.query(query, params, (err, rows) => {
    if (err) reject(err);
    else resolve(rows);
  });
});
