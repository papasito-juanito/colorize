module.exports = `UPDATE users SET userMail=?, userPassword=?, userName=?, 
  tones_id=(SELECT id FROM tones WHERE toneName=?), birthDate=?, gender=? 
  WHERE id=?`;
