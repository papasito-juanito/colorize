// Local import
const model = require('../../models/users/update');
const middleware = require('../../middlewares/hashPassword');
const db = require('../../db');

module.exports = (req, res) => {

  middleware(req.body.userPassword).then(hash => {
    
    const userPassword = hash;
    const {user_id, userMail, userName, toneName, birthDate, gender} = req.body;
    const params = [userMail, userPassword, userName, toneName, birthDate, gender, user_id];

    db.query(`SELECT userToggle FROM users WHERE id=
      ${req.body.user_id};`, (err, rows) => {
      if (err) throw err;
      else if (!rows.length) res.status(401).send(
        {'result': false, 'message': 'invalid user_id'})
      else {
        model(params, (err, rows) => {
          if (err) throw err;
          else res.status(200).send(
            {'result': true, 'message': ` updated`});
        })
      }
    })
  })
};
