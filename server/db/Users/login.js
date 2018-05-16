const query = `
SELECT userPassword FROM users WHERE userToggle='true' AND userMail='userMail';
`
module.exports = query;

/* result
+--------------+
| userPassword |
+--------------+
*/
