// Local import
const mysql = require('../../8_mysql');
const query = require('../../9_query/95_wishlists/952_get/9529_check');

module.exports = (color_id, user_id) => new Promise((resolve) => {
  console.log(`[6_utility ] activated id: ${user_id}`);

  mysql.query(query, [color_id, user_id], (err, rows) => {
    if (err) {
      resolve(err);
    } else {
      resolve(rows);
    }
  });
});
