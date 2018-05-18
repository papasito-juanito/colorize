const query = `
INSERT INTO colors (itemName,itemPhoto,itemColor,itemHex,itemDate) VALUES (?,?,?,?,?);
`
module.exports = query;
