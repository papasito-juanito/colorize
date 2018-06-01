// Global import
const jsonwebtoken = require('jsonwebtoken');

// Local import
const { jwt } = require('../../0_config');

module.exports = token => new Promise((resolve) => {
  console.log(`[6_utility ] activated token: ${token}`);

  if (token === undefined) resolve({ success: false, message: 'provide token' });
  else {
    jsonwebtoken.verify(token, jwt.secret, (err, decoded) => {
      if (err) resolve({ success: false, message: err.message });
      else resolve({ success: true, user_id: decoded.user_id });
    });
  }
});
