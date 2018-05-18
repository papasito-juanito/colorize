const query = `
SELECT ic.id color_id,ic.itemHex hex,ic.itemPhoto photo,c.category2Name category,
  b.brandName brand,i.itemName name,i.itemPrice price,i.itemVolume volume,
  ic.itemDate date,i.itemDetail description
FROM categories2 c, brands b, items i, itemColors ic
WHERE i.itemToggle='true' AND ic.colorToggle='true' AND
  c.id=i.categories2_id AND b.id=i.brands_id AND i.id=ic.items_id AND
  ic.id=?;
`
module.exports = query;
