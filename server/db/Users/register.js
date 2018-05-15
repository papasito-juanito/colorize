const query = `
START TRANSACTION;
INSERT INTO userDetails (tones_id) SELECT id FROM tones WHERE toneName='summer';
INSERT INTO users (userMail, userPassword, userName, userDetails_id, birthDate, gender)
VALUES ('userMail', 'userPassword', 'userName', (SELECT MAX(id) FROM userDetails), '1999-09-09', 'male');
COMMIT;
`
module.exports = query;
