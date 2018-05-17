// Local import
const model = require('../../models/items/list');

module.exports = function(req, res) {
  console.log('req.params : ',req.params);
  console.log(`[controller] received request from client...`);
  
  let color_id = req.body.color_id;
  
  let params = [color_id];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.send(rows);
    }
  })
};
