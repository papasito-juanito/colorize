// Local import
const model = require('../../models/users/get');
const middleware = require('../../middlewares/isValidPassword');
const db = require('../../db');

module.exports = {

  check: (req, res) => {
    res.send({login: req.session.userMail ? true : false})
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
    db.query(`SELECT id,userPassword FROM users WHERE userMail=
    "${req.query.userMail}";`, (err, rows) => {
      if (err) throw err;
      else if (!rows.length) res.send(
        {'result': false, 'message': 'invalid usermail'})
      else {
        middleware(req.query.userPassword, rows[0].userPassword)
        .then(boolean => {
          if (boolean) { 
            req.session.userMail = req.query.userMail;
            res.send(
              {'result': true, 'userMail': req.session.userMail});
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
