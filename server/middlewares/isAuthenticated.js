// Global import
const jwt = require('jsonwebtoken');

// Local import
const db = require('../db');

module.exports = (req, res, next) => {
  const userMail = jwt.verify(req.headers.token, 'jwt-secret').userMail;
  console.log('userMail: ', userMail);
  db.query(`SELECT id FROM users WHERE userMail="${userMail}";`, (err, rows) => {
    console.log('rows: ',rows);
    if (!rows.length === 1) {
      res.send({
        success: false,
        message: 'invalid userMail'
      })
    }
    else next();
  })
}
