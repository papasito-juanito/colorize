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

            const promise = new Promise( (resolve, reject) => {
              jwt.sign( 
                {
                  _id      : user.id,
                  username : username,
                  admin    : user.admin
                },
                secret,
                {
                  expiresIn : '1d',
                  issuer    : 'colorize.io',
                  subject   : 'userInfo'
                },
                (err, token) => {
                  if (err) reject(err);
                  resolve(token);
                }
              );
            });
            return promise;
            const respond = (token) => {
              res.render(
                'login_ok',
                {
                  'token' : token,
                  'token_arr' : token.split('.')
                }
              );
            };
          
            const onError = (error) => {
              res.status(403).json({
                message : error.message
              });
            };
          
            Users.findOneByUsername(username)
            .then(check)
            .then(respond)
            .catch(onError);
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
