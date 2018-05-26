// Global import
const jwt = require('jsonwebtoken');

// Local import
const model = require('../../models/wishLists/update');
const _delete = require('./delete');
const _get = require('./get');
const _post = require('./post');

module.exports = async (req, res) => {

  const userMail = await jwt.verify(req.headers.token, 'jwt-secret').userMail;
  const params = [req.body.color_id, userMail];

  const check = await _get.check(params, (err, rows) => {
    if (err) throw err;
    else {
      if (rows.length) _post(params, (err, rows) => {
        if (err) throw err;
        else {
          res.send(rows);
        }
      })
      else {
        _delete(params, (err, rows) => {
          if (err) throw err;
          else {
            res.send(rows);
          }
        })
      }
    }
  });
};
