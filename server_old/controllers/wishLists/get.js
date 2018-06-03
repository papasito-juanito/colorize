// Global import
const jwt = require('jsonwebtoken');

// Local import
const model = require('../../models/wishLists/get');

module.exports = {
  check: (req, res) => {

    const userMail = jwt.verify(req.headers.token, 'jwt-secret').userMail;
    const params = [req.query.color_id, userMail];

    model.check(params, (err, rows) => {
      if (err) throw err;
      else res.send(rows);
    })
  },

  list: (req, res) => {

    const userMail = jwt.verify(req.headers.token, 'jwt-secret').userMail;

    model.list(userMail, (err, rows) => {
      if (err) throw err;
      else res.send(rows);
    })
  }
};
