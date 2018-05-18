// Local import
const model = require('../../models/items/detail');

module.exports = function(req, res) {
  console.log('[color_id  ]',req.query.color_id);
  console.log(`[controller] received request from client...`);
  
  let color_id = req.query.color_id;
  
  let params = [color_id];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.send(rows);
    }
  })
};
