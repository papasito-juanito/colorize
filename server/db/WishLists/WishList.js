const query = `
SELECT u.userName user, i.itemName item
FROM users u, items i, wishLists w
WHERE u.userToggle='true' AND i.itemToggle='true' AND u.id=w.users_id AND i.id=w.items_id;
`
module.exports = query;

/* result
+-------+-----------+
| user  | item      |
+-------+-----------+
| admin | 뺴뺴로      |
| admin | 피자       |
| admin | 치킨       |
+-------+-----------+
*/
