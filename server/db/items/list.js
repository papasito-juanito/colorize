const query = `
SELECT ic.id color_id,ic.itemPhoto photo,ic.itemHex hex,b.brandName brand,
  i.itemName item,i.itemPrice price,i.itemVolume volume,rate.total reviews,rate.avg avg 
FROM itemColors ic,items i,brands b,
  (SELECT ic.id color_id,IFNULL(AVG(rt.reviewRating),0) avg,COUNT(rt.id) total
  FROM itemColors ic
  LEFT JOIN reviews rt
  ON ic.id=rt.itemColors_id
  GROUP BY ic.id) rate
WHERE ic.colorToggle='true' AND i.itemToggle='true' AND 
  b.id=i.brands_id AND i.id=ic.items_id AND ic.id=rate.color_id AND
  ic.id IN (?);
`
module.exports = query;
