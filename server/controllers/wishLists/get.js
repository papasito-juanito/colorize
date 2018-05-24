// Local import
const model = require('../../models/wishLists/get');

module.exports = (req, res) => {
  model(req.body.user_id, (err, rows) => {
    if (err) throw err;
    else res.send({
      login: req.session.userMail ? true : false, 
      result: rows
    });
  })
};
