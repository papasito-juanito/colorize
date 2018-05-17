const query = `
UPDATE items SET itemToggle='false' WHERE id=?;
`
module.exports = query;
