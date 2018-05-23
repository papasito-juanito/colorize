// Local import
const model = require('../../models/colors/delete');

module.exports = (req, res) => {
  model(req.body.color_id, (err, rows) => {
    if (err) throw err;
    else res.status(200).send({'user_id': req.session.user_id, 'color_id': color_id, 'delete': true});
  })
};
