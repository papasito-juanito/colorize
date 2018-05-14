const registerQuery = `
BEGIN
INSERT INTO userDetails (tones_id) SELECT id FROM tones WHERE toneName = 'spring'; 
INSERT INTO users (userMail, userPassword, userName, userDetails_id, birthDate, gender)
VALUES ('userMail', 'userPassword', 'userName', (SELECT MAX(id) FROM userDetails), '1999-09-09', 'male'); 
END
`
module.exports = registerQuery;
