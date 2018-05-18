const query = `
UPDATE itemColors SET colorToggle='false' WHERE id=?;
`
module.exports = query;
