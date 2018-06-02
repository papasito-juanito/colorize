// Global import
const bcrypt = require('bcrypt');

module.exports = async (password, hash) => {
  console.log(`[6_utility ] activated password: ${password}`);

  const boolean = await bcrypt.compare(password, hash);
  return boolean;
};
