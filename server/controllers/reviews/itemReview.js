// Local import
const model = require('../../models/reviews/itemReview');

module.exports = function(req, res) {
  console.log(`[controller] received request like '${req.body}' from client...`);
  
  let item_id = req.body.item_id;
  
  let params = [item_id];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response like '${rows}' from models...`);
      res.send(rows);
    }
  })
};
