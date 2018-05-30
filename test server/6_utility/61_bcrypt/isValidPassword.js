// Global import
const bcrypt = require('bcrypt');

module.exports = bcrypt.compare(password, userPassword) => {

}
const user = await find(db, username)
  const matches = await bcrypt.compare(password, user.passwordHash)
  if (matches) {
    // .. login
  } else {
    // .. error
  }
}

// module.exports = (userPassword, hash) => {
//   return new Promise((resolve, reject) => {
//     return bcrypt.compare(userPassword, hash, (err, boolean) => {
//       if (err) reject(err);
//       else resolve(boolean);
//     })
//   })
// }
