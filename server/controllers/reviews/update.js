// Local import
const model = require('../../models/reviews/update');

module.exports = (req, res) => {  
  const {review_id, reviewPhoto, reviewRating, reviewMessage} = req.body;  
  const params = [reviewPhoto, reviewRating, reviewMessage, review_id];

  model(params, (err, rows) => {
    if (err) throw err;
    else res.status(200).end('selected review is updated');
  })
};
