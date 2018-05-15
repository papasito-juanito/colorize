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
|  1 | 김치   | 신당동할매          | #224466 | 입생로랑             | 뺴뺴로      |
|  3 | 김치   | 일산칼국수          | #663362 | 에뛰드하우스          | 치킨        |
|  5 | 김치   | 대전텃밭            | #221156 | 맥                 | 순대국      |
+----+--------+-----------------+---------+--------------------+-----------+
*/
