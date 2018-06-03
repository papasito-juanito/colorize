module.exports = {
  signup:`
INSERT INTO users (userMail, userPassword, userName, tones_id, birthDate, gender)
VALUES (?, ?, ?, (SELECT id FROM tones WHERE toneName=?), ?, ?);
`,
  login: `
SELECT userPassword FROM users WHERE userToggle='true' AND userMail=?;
  `
}