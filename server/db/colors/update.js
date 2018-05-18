const query = `
UPDATE itemColors SET itemPhoto=?,itemColor=?,itemHex=?,itemDate=? WHERE id=?;
`
module.exports = query;
