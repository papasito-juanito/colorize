const query = `
SELECT r.id id, b.brandName, i.itemName item, r.reviewPhoto photo, r.reviewRating rating, r.reviewMessage message, r.reviewTime writeAt, rl.likes
FROM brands b, items i, users u, reviews r, (SELECT COUNT(reviews_id) likes FROM reviewLikes, reviews, items WHERE items.id = reviews.items_id AND reviews.id = reviewLikes.reviews_id) rl
WHERE r.reviewToggle='true' AND b.id=i.brands_id AND u.id=r.users_id AND i.id=r.items_id AND u.id='3';
`
module.exports = query;

/* result
+----+--------------+-----------+--------+--------+--------------+---------------------+-------+
| id | brandName    | item      | photo  | rating | message      | writeAt             | likes |
+----+--------------+-----------+--------+--------+--------------+---------------------+-------+
*/
