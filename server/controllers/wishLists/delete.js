// Local import
const model = require('../../models/wishLists/delete');

module.exports = function(req, res) {
  console.log('[req.body  ]',req.body);
  console.log(`[controller] received request from client...`);
  
  let wish_id = req.body.wish_id;
  
  let params = [wish_id];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.end('selected wishlist is deleted');
    }
  })
};
