// Local import
const model = require('../../models/colors/post');

module.exports = (req, res) => {
  
  const {itemName, itemPhoto, itemColor, itemHex, itemDate} = req.body;
  const params = [itemName, itemPhoto, itemColor, itemHex, itemDate];

  model(params, (err, rows) => {
    if (err) throw err;
    else res.status(200).end('selected color is posted');
  })
};
