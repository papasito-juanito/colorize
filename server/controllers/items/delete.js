// Local import
const model = require('../../models/items/delete');

module.exports = (req, res) => {
  model(req.body.item_id, (err, rows) => {
    if (err) throw err;
    else res.send({
      login: req.session.userMail ? true : false,
      item_id: req.body.item_id,
      delete: true
    });
  })
};
