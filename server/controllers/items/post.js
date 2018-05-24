// Local import
const model = require('../../models/items/post');

module.exports = (req, res) => {  
  const {category, brand, name, volume, price, detail} = req.body;
  const params = [category, brand, name, volume, price, detail];

  model(params, (err, rows) => {
    if (err) throw err;
    else res.status(200).end('selected color is posted');
  })
};
