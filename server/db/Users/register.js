const query = `
INSERT INTO users (userMail, userPassword, userName, userDetails_id, birthDate, gender)
VALUES (?, ?, ?, (SELECT MAX(id) FROM userDetails), ?, ?);

`
module.exports = query;
