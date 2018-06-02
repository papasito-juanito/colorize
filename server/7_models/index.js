// Local import
const mysql = require('../8_mysql');

// module.exports = async (query, params) => {
//   console.log(`[7_model   ] activated params: ${params}`);

//   const rows = await mysql.query(query, params);
//   console.log('rows.error :', rows);
//   return rows;
// };
module.exports = (query, params) => new Promise((resolve) => {
  console.log(`[7_model   ] activated params: ${params}`);

  mysql.query(query, params, (err, rows) => {
    if (err) {
      resolve(err.message);
    } else {
      resolve(rows);
    }
  });
});
