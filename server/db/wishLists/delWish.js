const query = `
UPDATE wishLists SET wishToggle='false' WHERE id=?;
`
module.exports = query;
