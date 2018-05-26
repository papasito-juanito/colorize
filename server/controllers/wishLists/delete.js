// Local import
const model = require('../../models/wishLists/delete');

module.exports = (req, res) => {
  model(params, (err, rows) => {
    if (err) throw err;
    else res.send(rows);
  })
};
