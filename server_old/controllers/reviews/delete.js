// Local import
const model = require('../../models/reviews/delete');

module.exports = (req, res) => {
  model(req.body.review_id, (err, rows) => {
    if (err) throw err;
    else res.send({
      delete: true
    });
  })
};
