// Global import
const bcrypt = require('bcrypt');

module.exports = (userPassword, hash) => {
  return new Promise((resolve, reject) => {
    return bcrypt.compare(userPassword, hash, (err, boolean) => {
      if (err) reject(err);
      else resolve(boolean);
    })
  })
}
