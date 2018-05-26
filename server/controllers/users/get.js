// Global import
const jwt = require('jsonwebtoken');

// Local import
const model = require('../../models/users/get');
const middleware = require('../../middlewares/isValidPassword');
const db = require('../../db');

module.exports = {

  check: (req, res) => {
    res.json({
      success: true
    });
  },

  info: (req, res) => {

    const userMail = jwt.verify(req.headers.token, 'jwt-secret').userMail;

    model.info(userMail, (err, rows) => {
      if (err) throw err;
      else res.send(rows);
    })
  }
};
