// Local import
const model = require('../../models/colors/delete');

module.exports = (req, res) => {
  
  const color_id = req.body.color_id;
  const params = [color_id];

  model(params, (err, rows) => {
    if (err) throw err;
    else res.status(200).end('selected color is deleted');
  })
};
