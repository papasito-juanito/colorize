// Local import
const verify = require('../../../../6_utility/62_jsonwebtoken/622_verify');
const model = require('../../../../7_models');
const query = require('../../../../9_query/93_reviews/931_post/9311_message');

module.exports = async (req, res) => {
  console.log(`[5_control ] activated query: ${query}`);

  const decoded = await verify(req.headers.token);
  const { color_id, reviewPhoto, reviewRating, reviewMessage } = req.body;
  const params = [color_id, reviewPhoto, reviewRating, decoded.user_id, reviewMessage];
  await model(query, params);
  res.json({ success: true, message: 'posted' });
};
