module.exports = `
INSERT INTO reviews (itemColors_id,reviewPhoto,reviewRating,users_id,reviewMessage)
VALUES (?,?,?,(SELECT id FROM users WHERE userMail=?),?);
`;
