const query = `
UPDATE users SET userToggle='false' WHERE id=?;
`
module.exports = query;
