// Local import
const model = require('../../models/reviews/modify');

module.exports = function(req, res) {
  console.log(`[controller] received request from client...`);
  
  let reviewPhoto = req.body.reviewPhoto;
  let reviewRating = req.body.reviewRating;
  let reviewMessage = req.body.reviewMessage;
  let review_id = req.body.review_id;
  
  let params = [reviewPhoto, reviewRating, reviewMessage, review_id];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.send(rows);
    }
  })
};
