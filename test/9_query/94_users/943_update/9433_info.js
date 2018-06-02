module.exports = `
UPDATE users SET userPhoto=?, userName=?, 
  tones_id=(SELECT id FROM tones WHERE toneName=?), userPassword=? WHERE id=?;`;
