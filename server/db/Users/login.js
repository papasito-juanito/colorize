const loginQuery = `
SELECT userPassword FROM users WHERE userMail = 'userMail';
`
module.exports = loginQuery;
