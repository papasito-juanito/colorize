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
SELECT IFNULL(AVG(reviewRating),0) avg, COUNT(id) total,
  COUNT(CASE WHEN reviewRating='1' THEN 1 END) s,
  COUNT(CASE WHEN reviewRating='2' THEN 1 END) ss,
  COUNT(CASE WHEN reviewRating='3' THEN 1 END) sss,
  COUNT(CASE WHEN reviewRating='4' THEN 1 END) ssss,
  COUNT(CASE WHEN reviewRating='5' THEN 1 END) sssss
FROM reviews
WHERE itemColors_id=?;
  `
};
