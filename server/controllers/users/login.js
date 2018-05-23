// Local import
const model = require('../../models/users/login');
const middleware = require('../../middlewares/isValidPassword');
const db = require('../../db');

module.exports = function(req, res) {
 
  const { userMail, userPassword } = req.body;
  const params = [ userMail, userPassword ];

  db.query(`SELECT id,userPassword FROM users WHERE userMail="${userMail}";`, function(err, rows) {
    if (err) { throw err } 
    else if (!rows.length) { res.status(404).end('[server    ] invalid usermail...') }
    else {
      middleware(userPassword, rows[0].userPassword).then(function(boolean) {
        if (boolean) { 
          req.session.user_id = rows[0].id;
          res.status(200).send({ 'user_id': req.session.user_id, 'login': true }) 
        }
        else { res.status(401).end({ 'login': false, 'message': 'invalid password' }) }
      })
    }
  })
};
