// Local import
const model = require('../../models/colors/list');

module.exports = function(req, res) {
  console.log(`[controller] received request like '${req.body}' from client...`);

  model(function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response like '${rows}' from models...`);
      res.send(rows);
    }
  })
};
