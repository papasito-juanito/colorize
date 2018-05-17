// Local import
const model = require('../../models/reviews/userInfo');

module.exports = function(req, res) {
  console.log(`[controller] received request from client...`);
  
  let user_id = req.body.user_id;
  
  let params = [user_id];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.send(rows);
    }
  })
};
