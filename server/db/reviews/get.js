module.exports = {
  info: `
SELECT u.userName user, YEAR(NOW())-YEAR(u.birthDate) age, t.toneName tone
FROM users u, userDetails ud, tones t
WHERE t.id=ud.tones_id AND ud.id=u.userDetails_id AND u.id=?;
  `,
  list: `
SELECT r.id review_id,r.reviewPhoto photo,u.userName user,YEAR(NOW())-YEAR(u.birthDate) age,
  t.toneName tone,r.reviewRating rating,r.reviewMessage message,r.reviewTime writeAt, rl.likes likes
FROM itemColors ic,users u,reviews r,tones t, 
  (SELECT ri.id review_id,IFNULL(COUNT(rli.id),0) likes 
  FROM reviews ri
  LEFT JOIN reviewLikes rli 
  ON ri.id=rli.reviews_id GROUP BY ri.id) rl
WHERE ic.colorToggle='true' AND u.userToggle='true' AND r.reviewToggle='true' AND
  ic.id=r.itemColors_id AND u.id=r.users_id AND t.id=u.tones_id AND r.id=rl.review_id AND
  ic.id=?
ORDER BY writeAt DESC;
  `,
  rank: `
SELECT r.id review_id,r.reviewPhoto photo,u.userName user,YEAR(NOW())-YEAR(u.birthDate) age,
  t.toneName tone,r.reviewRating rating,r.reviewMessage message,r.reviewTime writeAt, rl.likes likes
FROM itemColors ic,users u,reviews r,tones t, 
  (SELECT ri.id review_id,IFNULL(COUNT(rli.id),0) likes 
  FROM reviews ri
  LEFT JOIN reviewLikes rli 
  ON ri.id=rli.reviews_id GROUP BY ri.id) rl
WHERE ic.colorToggle='true' AND u.userToggle='true' AND r.reviewToggle='true' AND
  ic.id=r.itemColors_id AND u.id=r.users_id AND t.id=u.tones_id AND r.id=rl.review_id AND
  ic.id=?
ORDER BY likes DESC LIMIT 3;
  `,
  user: `
SELECT r.id id, ic.itemPhoto itemPhoto, ic.itemHex hex, b.brandName, i.itemName item, 
  r.reviewPhoto reviewPhoto, r.reviewRating rating, r.reviewMessage message, r.reviewTime writeAt, rl.likes
FROM brands b, items i, itemColors ic, users u, reviews r, 
  (SELECT COUNT(reviews_id) likes FROM reviewLikes, reviews, items WHERE items.id = reviews.itemColors_id AND reviews.id = reviewLikes.reviews_id) rl
WHERE u.userToggle='true' AND i.itemToggle='true' AND r.reviewToggle='true' AND 
  i.id=ic.items_id AND b.id=i.brands_id AND u.id=r.users_id AND i.id=r.itemColors_id AND u.id=?;
  `
};
