const query = `
  SELECT avg.id id,avg.avg avg,avg.total total,star.s s,star.ss ss,star.sss sss,
  star.ssss ssss,star.sssss sssss
FROM 
  (SELECT ic.id id, IFNULL(AVG(r.reviewRating),0) avg,COUNT(r.reviewRating) total
  FROM itemColors ic
  LEFT JOIN reviews r
  ON ic.id=r.itemColors_id
  GROUP BY ic.id) avg,
  (SELECT ic.id id, 
    COUNT(r1.reviewRating) s,
    COUNT(r2.reviewRating) ss,
    COUNT(r3.reviewRating) sss,
    COUNT(r4.reviewRating) ssss,
    COUNT(r5.reviewRating) sssss
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
  GROUP BY ic.id) star
WHERE avg.id=star.id
`
module.exports = query;
