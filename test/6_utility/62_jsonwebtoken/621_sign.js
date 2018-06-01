// Global import
const jsonwebtoken = require('jsonwebtoken');

// Local import
const { jwt } = require('../../0_config');

module.exports = async (id, userMail) => {
  console.log(`[6_utility ] activated id: ${id}`);

  const token = jsonwebtoken.sign(
    { user_id: id, userMail }, jwt.secret,
    { expiresIn: jwt.expiresIn },
  );
  return token;
};
