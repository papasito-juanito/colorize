// Local import
const model = require('../../models/users/update');
const middleware = require('../../middlewares/hashPassword');
const db = require('../../db');

module.exports = (req, res) => {

  middleware(req.body.userPassword).then(hash => {
    
    const userPassword = hash;
    const {userName, toneName, userPhoto} = req.body;
    const params = [ userPassword, userName, userPhoto, toneName, userMail];

    db.query(`SELECT userToggle FROM users WHERE id=
      ${req.body.user_id};`, (err, rows) => {
      if (err) throw err;
      else if (!rows.length) res.send(
        {'result': false, 'message': 'invalid user_id'})
      else {
        model(params, (err, rows) => {
          if (err) throw err;
          else res.send(
            {'result': true, 'message': ` updated`});
        })
      }
    })
  })
};
