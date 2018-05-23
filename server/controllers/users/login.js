// Local import
const model = require('../../models/users/login');
const middleware = require('../../middlewares/isValidPassword');
const db = require('../../db');

module.exports = (req, res) => {
  
  const { userMail, userPassword } = req.body;
  const params = [ userMail, userPassword ];

  db.query(`SELECT id,userPassword FROM users WHERE userMail="${userMail}";`, async (err, rows) => {
    if (err) { throw err } 
    else if (!rows.length) { res.status(404).end('[server    ] invalid usermail...') }
    else {
      middleware(userPassword, rows[0].userPassword)
      .then(boolean => {
        if (boolean) { 
          req.session.user_id = rows[0].id;
          res.status(200).end('login') 
        }
        else { res.status(401).end('no pasw') }
      })
    }
  })
};
