// Local import
const model = require('../../../../7_models');
const query = require('../../../../9_query/93_reviews/933_update/9332_message');

module.exports = async (req, res) => {
  console.log(`[5_control ] activated query: ${query}`);

  const { review_id, reviewPhoto, reviewRating, reviewMessage } = req.body;
  const params = [reviewPhoto, reviewRating, reviewMessage, review_id];
  await model(query, params);
  res.json({ success: true, message: 'updated' });
};
