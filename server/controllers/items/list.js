// Local import
const model = require('../../models/items/list');

module.exports = function(req, res) {
  console.log(`[controller] received request like '${req.body}' from client...`);
  
  let color_id = req.body.color_id;
  
  let params = [color_id];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response like '${rows}' from models...`);
      res.send(rows);
    }
  })
};
