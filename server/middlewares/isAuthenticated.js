// Global import
const jwt = require('jsonwebtoken');

// Local import
const db = require('../db');

module.exports = (req, res, next) => {
  const userMail = jwt.verify(req.headers.token, 'jwt-secret').userMail;

  db.query(`SELECT id FROM users WHERE userMail="${userMail}";`, (err, rows) => {
    if (!id) {
      res.json({
        success: false,
        message: 'invalid userMail'
      })
    }
  })
  next();
}
