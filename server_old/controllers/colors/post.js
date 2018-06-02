// Local import
const model = require('../../models/colors/post');

module.exports = (req, res) => {
  
  const {itemName, itemPhoto, itemColor, itemHex, itemDate} = req.body;
  const params = [itemName, itemPhoto, itemColor, itemHex, itemDate];

  model(params, (err, rows) => {
    if (err) throw err;
    else res.send({
      login: req.session.userMail ? true : false,
      color_id: req.body.color_id,
      post: true
    });
  })
};
