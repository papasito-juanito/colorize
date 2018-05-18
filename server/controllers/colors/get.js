// Local import
const model = require('../../models/colors/get');

module.exports = function(req, res) {
  console.log(`[controller] received request from client...`);

  model(function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.send(rows);
    }
  })
};
