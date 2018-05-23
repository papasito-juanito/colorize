// Local import
const model = require('../../models/users/update');
const middleware = require('../../middlewares/hashPassword');
const db = require('../../db');

module.exports = function(req, res) {

  middleware(req.body.userPassword).then(function(hash) {
    
    const userPassword=hash;
    const { userMail, userName, toneName, birthDate, gender } = req.body;
    const params = [ userMail, userPassword, userName, toneName, birthDate, gender ];

    db.query(`SELECT id FROM users WHERE userMail="${userMail}";`, function(err, rows) {
      if (rows.length !== 0) { res.status(404).end('[server    ] userMail exists...') }
      else {
        model(params, function(err, rows) {
          if (err) { throw err }
          else { res.status(200).end('[server    ] signup success...') }
        })
      }
    }) 
  })
};
