const query = `
SELECT userPassword FROM users WHERE userToggle='true' AND userMail=?;
`
module.exports = query;
