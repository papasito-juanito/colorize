const query = `
SELECT id, itemColor, itemHex FROM itemColors;
`
module.exports = query;

/* result
+----+--------------------+---------+
| id | itemColor          | itemHex |
+----+--------------------+---------+
*/
