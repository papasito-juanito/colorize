const query = `
SELECT r.id id, r.reviewPhoto photo, u.userName user, YEAR(NOW())-YEAR(u.birthDate) age, t.toneName tone, r.reviewRating rating, r.reviewMessage message, r.reviewTime writeAt, rl.likes
FROM tones t, userDetails ud, users u, items i, reviews r, (SELECT COUNT(reviews_id) likes FROM reviewLikes, reviews, items WHERE items.id = reviews.items_id AND reviews.id = reviewLikes.reviews_id) rl
WHERE r.reviewToggle='true' AND t.id=ud.tones_id AND ud.id=u.userDetails_id AND u.id=r.users_id AND i.itemName='뺴뺴로';
`
module.exports = query;

/* result
+----+--------+--------+------+--------+--------+--------------+---------------------+-------+
| id | photo  | user   | age  | tone   | rating | message      | writeAt             | likes |
+----+--------+--------+------+--------+--------+--------------+---------------------+-------+
*/
