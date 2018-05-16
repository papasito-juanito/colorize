const query = `
SELECT i.id id, ic.itemPhoto photo, ic.itemColor color, ic.itemHex Hex, b.brandName brand, i.itemName item
FROM brands b, items i, itemColors ic
WHERE i.itemToggle='true' AND b.id=i.brands_id AND i.id=ic.items_id AND i.id IN (1,3,5);
`
module.exports = query;

/* result
+----+--------+-----------------+---------+--------------------+-----------+
| id | photo  | color           | Hex     | brand              | item      |
+----+--------+-----------------+---------+--------------------+-----------+
*/
