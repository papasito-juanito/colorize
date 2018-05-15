const query = `
SELECT COUNT(userMail) userCheck FROM users WHERE userToggle='true' AND userMail='admin@code.com';
`
module.exports = query;

/* result
+-----------+
| userCheck |
+-----------+
|         1 |
+-----------+
*/
