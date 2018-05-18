const query = `
SELECT *
FROM itemColors ic, reviews r, reviewLikes rl
WHERE ic.colorToggle='true' AND r.reviewToggle='true' AND rl.likeToggle='true' AND
  ic.id=r.itemColors_id AND r.id=rl.reviews_id AND
  ic.id=?;
`
module.exports = query;
`
reviews,avr,1st,2st,3st,4st,5st,total

SELECT ic.id, rn.reviews
FROM itemColors ic, reviews r,
  (SELECT itemColors_id,COUNT(id) reviews FROM reviews GROUP BY itemColors_id) rn
WHERE ic.colorToggle='true' AND r.reviewToggle='true' AND
  ic.id=r.itemColors_id AND ic.id=rn.itemColors_id AND r.id=rn.id AND
  ic.id=?;
`
