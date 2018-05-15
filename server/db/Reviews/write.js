const query = `
INSERT INTO reviews (items_id, reviewPhoto, reviewRating, users_id, reviewMessage)
VALUES ((SELECT id FROM items WHERE itemName='뺴뺴로'), '사진', '2', (SELECT id FROM users WHERE userMail='admin@code.com'), '안써봄');
`
module.exports = query;
