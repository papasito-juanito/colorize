const query = `
INSERT INTO reviews (items_id, reviewPhoto, reviewRating, users_id, reviewMessage)
VALUES (?, ?, ?, ?, ?);
`
module.exports = query;
