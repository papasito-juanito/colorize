module.exports = {
  detail: `
SELECT ic.id color_id, ic.itemHex hex, ic.itemPhoto photo, c.category2Name category,
  ic.itemColor color, b.brandName brand, i.itemName name, i.itemPrice price,
  i.itemVolume volume, ic.itemDate date, i.itemDetail description
FROM itemColors ic, categories2 c, brands b, items i 
WHERE i.itemToggle='true' AND ic.colorToggle='true' AND
  c.id=i.categories2_id AND b.id=i.brands_id AND i.id=ic.items_id AND
  ic.id=?;
  `,
  list: `
SELECT ic.id color_id, ic.itemHex hex, ic.itemPhoto photo, c.category2Name category,
  ic.itemColor color, b.brandName brand, i.itemName name, i.itemPrice price,
  i.itemVolume volume, ic.itemDate date, rate.total reviews, rate.avg avg 
FROM itemColors ic, categories2 c, brands b, items i,
  (SELECT ici.id color_id, IFNULL(AVG(rt.reviewRating),0) avg, COUNT(rt.id) total
  FROM itemColors ici
  LEFT JOIN reviews rt
  ON ici.id=rt.itemColors_id AND rt.reviewToggle='true'
  GROUP BY ici.id) rate
WHERE i.itemToggle='true' AND ic.colorToggle='true' AND
  c.id=i.categories2_id AND b.id=i.brands_id AND i.id=ic.items_id AND
  ic.id=rate.color_id AND ic.id IN (?);
  `,
  rate: `
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
WHERE avg.id=star.id AND avg.id=?;



SELECT AVG(reviewRating) avg, COUNT(id) total, 
  COUNT(IF(reviewRating="1",0,1)) s,
  COUNT(IF(reviewRating="2",0,1)) ss,
  COUNT(IF(reviewRating="3",0,1)) sss,
  COUNT(IF(reviewRating="4",0,1)) ssss,
  COUNT(IF(reviewRating="5",0,1)) sssss
FROM reviews
WHERE itemColors_id=2;
  `
};
