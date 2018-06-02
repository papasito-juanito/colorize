// Local import
const mysql = require('../../8_mysql');
const query = require('../../9_query/93_reviews/932_get/9325_check');

module.exports = (review_id, user_id) => new Promise((resolve) => {
  console.log(`[6_utility ] activated id: ${user_id}`);

  mysql.query(query.reviewLikes, [review_id, user_id], (err, rows) => {
    if (err) resolve(err);
    else resolve(rows);
  });
});
