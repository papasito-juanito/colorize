// Local import
const model = require('../../models/wishLists/delete');

module.exports = (req, res) => {
  model(req.body.color_id, (err, rows) => {
    if (err) throw err;
    else res.send(rows);
  });
};
