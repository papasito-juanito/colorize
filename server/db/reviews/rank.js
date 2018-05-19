const query = `
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
`
module.exports = query;
