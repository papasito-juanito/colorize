const query = `
SELECT * FROM
  (SELECT ic.id color_id, IFNULL(AVG(rt.reviewRating),0) avg, 
    COUNT(r1.id) 1st, COUNT(r2.id) 2st, COUNT(r3.id) 3st, COUNT(r4.id) 4st, 
    COUNT(r5.id) 5st, COUNT(rt.id) total
  FROM itemColors ic
  LEFT JOIN reviews r1
  ON ic.id=r1.itemColors_id AND r1.reviewRating='1'
  LEFT JOIN reviews r2
  ON ic.id=r2.itemColors_id AND r2.reviewRating='2'
  LEFT JOIN reviews r3
  ON ic.id=r3.itemColors_id AND r3.reviewRating='3'
  LEFT JOIN reviews r4
  ON ic.id=r4.itemColors_id AND r4.reviewRating='4'
  LEFT JOIN reviews r5
  ON ic.id=r5.itemColors_id AND r5.reviewRating='5'
  LEFT JOIN reviews rt
  ON ic.id=rt.itemColors_id
  GROUP BY ic.id) rate
WHERE rate.color_id=?;
`
module.exports = query;
