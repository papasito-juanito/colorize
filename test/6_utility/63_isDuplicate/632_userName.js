// Local import
const mysql = require('../../8_mysql');
const query = require('../../9_query/94_users/942_get/9421_check');

module.exports = userName => new Promise((resolve) => {
  console.log(`[6_utility ] activated name: ${userName}`);

  mysql.query(query.userName, userName, (err, rows) => {
    if (err) resolve(err);
    else resolve(rows);
  });
});
