const query = `
SELECT r.id review_id, r.reviewPhoto photo, u.userName user, YEAR(NOW())-YEAR(u.birthDate) age,
  t.toneName tone, r.reviewRating rating, r.reviewMessage message, r.reviewTime writeAt, rl.likes
FROM reviews r, users u, tones t, itemColors ic, reviewLikes rs,
  (SELECT COUNT(reviews_id) likes FROM reviewLikes, reviews, itemColors WHERE itemColors.id = reviews.itemColors_id AND reviews.id = reviewLikes.reviews_id) rl 
WHERE r.reviewToggle='true' AND u.userToggle='true' AND rs.likeToggle='true' AND
  t.id=u.tones_id AND ic.id=r.itemColors_id AND r.id=rs.reviews_id AND
  ic.id=?
`
module.exports = query;
