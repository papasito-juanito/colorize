// Local import
const model = require('../../models/wishLists/delete');

module.exports = (req, res) => {
  model(req.body.wish_id, (err, rows) => {
    if (err) throw err;
    else res.send({
      login: req.session.userMail ? true : false,
      wish_id: req.body.wish_id,
      delete: true
    });
  })
};
