// Local import
const model = require('../../models/reviews/write');

module.exports = function(req, res) {
  console.log(`[controller] received request from client...`);
  
  let item_id = req.body.item_id;
  let reviewPhoto = req.body.reviewPhoto;
  let reviewRating = req.body.reviewRating;
  let user_id = req.body.user_id;
  let reviewMessage = req.body.reviewMessage;
  
  let params = [item_id, reviewPhoto, reviewRating, user_id, reviewMessage];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.send(rows);
    }
  })
};
