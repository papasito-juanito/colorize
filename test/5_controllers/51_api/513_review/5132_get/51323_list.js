// Local import
const verify = require('../../../../6_utility/62_jsonwebtoken/622_verify');
const model = require('../../../../7_models');
const query = require('../../../../9_query/93_reviews/932_get/9323_list');

module.exports = async (req, res) => {
  console.log(`[5_control ] activated query: ${query}`);

  const decoded = await verify(req.headers.token);
  const rows = await model(query, [req.query.color_id, decoded.user_id]);
  res.json({ success: true, rows });
};
