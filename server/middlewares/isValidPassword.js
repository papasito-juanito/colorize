// Global import
const bcrypt = require('bcrypt');

module.exports = function(userPassword, hash) {
  return new Promise(function(resolve, reject) {
    return bcrypt.compare(userPassword, hash, function(err, boolean) {
      if (err) { reject(err) }
      else { resolve(boolean) }
    })
  })
}
