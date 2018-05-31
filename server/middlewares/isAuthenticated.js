// Global import
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.headers.token === undefined) res.json({ success: false, message: 'provide token' });
  else {
    jwt.verify(req.headers.token, 'jwt-secret', (err, decoded) => {
      if (err) res.json({ success: false, message: err.message });
      else next(decoded.userMail);
    });
  }
};

