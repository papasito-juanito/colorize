// Local import
const model = require('../../models/users/get');
const middleware = require('../../middlewares/isValidPassword');
const db = require('../../db');

module.exports = {
  login: (req, res) => {
    db.query(`SELECT id,userPassword FROM users WHERE userMail="
      ${req.query.userMail}";`, (err, rows) => {
      if (err) throw err;
      else if (!rows.length) res.status(401).send(
        {'result': false, 'message': 'invalid usermail'})
      else {
        middleware(req.query.userPassword, rows[0].userPassword)
        .then(boolean => {
          if (boolean) { 
            req.session.user_id = rows[0].id;
            res.status(200).send(
              {'result': true, 'user_id': req.session.user_id});
          }
          else res.status(401).send(
            {'result': false, 'message': 'invalid password'})
        })
      }
    })
  },

  logout: (req, res) => {
    if (req.session.user_id) {
      req.session.destroy(err => {
        if (err) throw err;
        else res.status(200).send(
          {'result': true, 'message': 'session destroyed'})
      });
    }
    else res.status(401).send(
      {'result': false, 'message': 'invalid session'})
  }
};
