// Local import
const model = require('../../models/items/delete');

module.exports = function(req, res) {
  console.log('[req.body  ]',req.body);
  console.log(`[controller] received request from client...`);
  
  let item_id = req.body.item_id;
  
  let params = [item_id];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.end('selected item is deleted');
    }
  })
};
