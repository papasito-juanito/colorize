const query = `
UPDATE users SET userToggle='false' WHERE userMail=?;
`
module.exports = query;
