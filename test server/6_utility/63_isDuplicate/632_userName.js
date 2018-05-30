// Local import
const mysql = require('../../8_mysql');
const query = require('../../9_query/94_users/942_get/9429_check');

module.exports = userName => new Promise((resolve, reject) => {
  console.log(`[6_utility ] activated name: ${userName}`);

  mysql.query(query.userName, userName, (err, rows) => {
    if (err) reject(err);
    else resolve(rows);
  });
});
