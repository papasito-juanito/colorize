// Local import
const model = require('../../models/users/delete');
const db = require('../../db');

module.exports = (req, res) => {
  db.query(`SELECT userToggle FROM users WHERE id=
  ${req.body.user_id};`, (err, rows) => {
    if (err) throw err;
    else if (!rows.length) res.send(
      {'result': false, 'message': 'invalid user_id'})
    else if (rows[0].userToggle === 'false') res.send(
      {'result': false, 'message': 'userToggle false already'})
    else {
      model(req.body.user_id, (err, rows) => {
        if (err) throw err;
        else res.send(
          {'result': true, 'message': 'userToggle set false'});
      })
    }
  })
};
