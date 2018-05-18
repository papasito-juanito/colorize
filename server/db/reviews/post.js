const query = `
INSERT INTO reviews (itemColors_id,reviewPhoto,reviewRating,users_id,reviewMessage)
VALUES (?,?,?,?,?);
`
module.exports = query;
