// Local import
const model = require('../../../../7_models');
const query = require('../../../../9_query/93_reviews/934_delete');

module.exports = async (req, res) => {
  console.log(`[5_control ] activated query: ${query}`);

  await model(query, req.body.review_id);
  res.json({ success: true, message: 'deleted' });
};
