module.exports = {
  info: `
SELECT u.userMail mail, u.userPhoto photo, u.userName name, t.toneName tone, 
  u.birthDate birth, u.gender gender
FROM users u, tones t 
WHERE userToggle='true' AND t.id=u.tones_id AND userMail=?;
  `,
  login: `
SELECT userPassword FROM users WHERE userToggle='true' AND userMail=?;
  `
};
