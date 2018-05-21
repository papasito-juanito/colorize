// Local import
const model = require('../../models/users/login');
const middleware = require('../../middlewares/isValidPassword');
const db = require('../../db');

module.exports = function(req, res) {
  
  const secret = req.app.get('jwt-secret');
  const { userMail, userPassword } = req.body;
  const params = [ userMail, userPassword ];

  db.query(`SELECT userPassword FROM users WHERE userMail="${userMail}";`, function(err, rows) {
    if (err) { throw err } 
    else if (!rows.length) { res.status(404).end('[server    ] invalid usermail...') }
    else {
      middleware(userPassword, rows[0].userPassword).then(function(boolean) {
        if (boolean) { res.status(200).end('[server    ] login success...') }
        else { res.status(401).end('[server    ] invalid password...') }
      })
    }
  })
};
