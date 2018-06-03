// Local import
const model = require('../../models/colors/update');

module.exports = (req, res) => {

  const {color_id, itemPhoto, itemColor, itemHex, itemDate} = req.body;
  const params = [itemPhoto, itemColor, itemHex, itemDate, color_id];

  model(params, (err, rows) => {
    if (err) throw err;
    else res.send({
      login: req.session.userMail ? true : false,
      color_id: req.body.color_id,
      update: true
    });
  })
};
