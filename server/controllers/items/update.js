// Local import
const model = require('../../models/items/update');

module.exports = (req, res) => {  
  const {category, brand, name, volume, price, detail} = req.body;
  const params = [category, brand, name, volume, price, detail];

  model(params, (err, rows) => {
    if (err) throw err;
    else res.send({
      login: req.session.userMail ? true : false,
      item_id: req.body.item_id,
      update: true
    });
  })
};
