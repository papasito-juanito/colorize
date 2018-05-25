// Global import
const jwt = require('jsonwebtoken');

// Local import
const model = require('../../models/users/get');
const middleware = require('../../middlewares/isValidPassword');
const db = require('../../db');

module.exports = {

  check: (req, res) => {
    res.json({
      success: true,
      info : req.decodeed
    });
  },

  info: (req, res) => {
    model.info((req.session.userMail || 'invalid access'), (err, rows) => {
      if (err) throw err;
      else res.send({
        login: req.session.userMail ? true : false, 
        result: rows
      });
    })
  },

  login: (req, res) => {

    const secret = req.app.get('jwt-secret');

    db.query(`SELECT id,userPassword FROM users WHERE userMail=
    "${req.body.userMail}";`, (err, rows) => {
      if (err) throw err;
      else if (!rows.length) res.send(
        {'result': false, 'message': 'invalid usermail'})
      else {
        middleware(req.body.userPassword, rows[0].userPassword)
        .then(boolean => {
          if (boolean) { 
            const token = jwt.sign({
              userMail: req.body.userMail
          }, 'jwt-secret', {
              expiresIn: 60 * 60
          });
          res.send({'token': token});
          }
          else res.send(
            {'result': false, 'message': 'invalid password'})
        })
      }
    })
  },

  logout: (req, res) => {  
    if (req.session.userMail) {
      req.session.destroy(err => {
        if (err) throw err;
        else res.send(
          {'result': true, 'message': 'session destroyed'})
      });
    }
    else res.send(
      {'result': false, 'message': 'invalid session'})
  }
};
