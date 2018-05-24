// Local import
const model = require('../../models/colors/delete');

module.exports = (req, res) => {
  model(req.body.color_id, (err, rows) => {
    if (err) throw err;
    else res.send({
      login: req.session.userMail ? true : false,
      color_id: req.body.color_id,
      delete: true
    });
  })
};
