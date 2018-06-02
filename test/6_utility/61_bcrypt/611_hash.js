// Global import
const bcrypt = require('bcrypt');

module.exports = async (userPassword) => {
  console.log(`[6_utility ] activated password: ${userPassword}`);

  const hash = await bcrypt.hash(userPassword, 10);
  return hash;
};
