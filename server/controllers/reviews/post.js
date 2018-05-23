// Local import
const model = require('../../models/reviews/post');

module.exports = (req, res) => {
  const color_id, reviewPhoto, reviewRating, user_id, reviewMessage = req.body;
  const params = [color_id, reviewPhoto, reviewRating, user_id, reviewMessage];
  model(params, (err, rows) => {
    if (err) throw err;
    else res.status(200).end('review posted');
  })
};
