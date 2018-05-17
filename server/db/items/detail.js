const query = `
SELECT ic.id item_id, ic.itemPhoto photo, ic.itemHex hex, b.brandName brand, 
  i.itemName item, i.itemPrice price, i.itemVolume volume, i.itemDetail description

FROM itemColors ic, items i, brands b

WHERE ic.colorToggle='true' AND i.itemToggle='true' AND 
  b.id=i.brands_id AND i.id=ic.items_id AND
  ic.id=?;
`
module.exports = query;
