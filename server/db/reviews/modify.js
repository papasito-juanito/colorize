const query = `
UPDATE reviews SET reviewPhoto=?, reviewRating=?, reviewMessage=? WHERE id=?;
`
module.exports = query;
