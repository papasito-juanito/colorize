module.exports = `
UPDATE users SET userPassword=?, userName=?, userPhoto=?,
tones_id=(SELECT id FROM tones WHERE toneName=?) 
WHERE id=(SELECT id FROM users WHERE userMail=?);
`;
