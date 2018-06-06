// Local import
const model = require('../../../../7_models');
const query = require('../../../../9_query/93_reviews/931_post/9311_message');

module.exports = async (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[5131_cont ] activated post query: ${query}`);
  }

  const { color_id, reviewPhoto, reviewRating, reviewMessage } = req.body;
  const params = [color_id, reviewPhoto, reviewRating, req.user_id, reviewMessage];
  await model(query, params);
  res.json({ success: true, message: 'posted' });
};
