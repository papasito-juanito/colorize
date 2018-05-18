// Local import
const model = require('../../models/reviews/myReview');

module.exports = function(req, res) {
  console.log('[user_id   ]',req.query.user_id);
  console.log(`[controller] received request from client...`);
  
  let user_id = req.query.user_id;
  
  let params = [user_id];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.send(rows);
    }
  })
};
