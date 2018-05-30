// Global import
const bcrypt = require('bcrypt');

module.expors = async (userPassword) => {
  const hash = await bcrypt.hash(userPassword, 10);
  return hash;
};

// module.exports = function(userPassword) {
//   return new Promise(function(resolve, reject) {
//     return bcrypt.hash(userPassword, 10, function(err, hash) {
//       if (err) { reject(err) }
//       else { resolve(hash) }
//     })
//   })
// }
