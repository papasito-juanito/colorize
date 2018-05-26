// Local import
const model = require('../../models/users/post');
const middleware = require('../../middlewares/hashPassword');
const db = require('../../db');

module.exports = {
  signup: (req, res) => {

    middleware(req.body.userPassword).then(hash => {
      
      const userPassword = hash;
      const {userMail, userName, toneName, birthDate, gender} = req.body;
      const params = [userMail, userPassword, userName, toneName, birthDate, gender];

      db.query(`SELECT id FROM users WHERE userMail="${userMail}";`, (err, rows) => {
        if (rows.length !== 0) res.send(
          {'result': false, 'message': `${userMail} exists`});
          
        else {
          model.signup(params, (err, rows) => {
            if (err) throw err;
            else res.send(
              {'result': true, 'message': `${userMail} posted`});
          })
        }
      }) 
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
  }
};
