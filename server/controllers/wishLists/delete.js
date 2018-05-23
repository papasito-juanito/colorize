// Local import
const model = require('../../models/wishLists/delete');

module.exports = (req, res) => {
  model(req.body.wish_id, (err, rows) => {
    if (err) throw err;
    else res.status(200).end('selected wishlist is deleted');
  })
};
