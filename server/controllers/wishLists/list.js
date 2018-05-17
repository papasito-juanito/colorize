// Local import
const model = require('../../models/wishLists/delWish');

module.exports = function(req, res) {
  console.log(`[controller] received request like '${req.body}' from client...`);
  
  let user_id = req.body.user_id;
  
  let params = [user_id];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response like '${rows}' from models...`);
      res.send(rows);
    }
  })
};
