// Local import
const model = require('../../models/reviews/delReview');

module.exports = function(req, res) {
  console.log('[req.body  ]',req.body);
  console.log(`[controller] received request from client...`);
  
  let review_id = req.body.review_id;
  
  let params = [review_id];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.end('selected review is deleted');
    }
  })
};
