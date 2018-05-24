// Global import
const jwt = require('jsonwebtoken');

// Local import
const config = require('../../config');

module.exports = (userMail) => {
  return jwt.sign({userMail: userMail}, config.secret );
};
