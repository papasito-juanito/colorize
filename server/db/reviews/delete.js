const query = `
UPDATE reviews SET reviewToggle='false' WHERE id=?;
`
module.exports = query;
