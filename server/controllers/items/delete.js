// Local import
const model = require('../../models/items/delete');

module.exports = (req, res) => {
  model(req.body.item_id, (err, rows) => {
    if (err) throw err;
    else res.status(200).end('selected item is deleted');
  })
};
