// Global import
const jwt = require('jsonwebtoken');

// Local import
const model = require('../../models/reviews/get');

module.exports = {
  info: (req, res) => {
    
    const userMail = jwt.verify(req.headers.token, 'jwt-secret').userMail;

    model.info(userMail, (err, rows) => {
      if (err) throw err;
      else res.send(rows);
    })
  },
  
  list: (req, res) => {
    model.list(req.query.color_id, (err, rows) => {
      if (err) throw err;
      else res.send(rows);
    })
  },

  rank: (req, res) => {
    model.rank((req.query.color_id || 'invalid access'), (err, rows) => {
      if (err) throw err;
      else res.send(rows);
    })
  },

  user: (req, res) => {

    const userMail = jwt.verify(req.headers.token, 'jwt-secret').userMail;

    model.user(userMail, (err, rows) => {
      if (err) throw err;
      else res.send(rows);
    })
  }
};
