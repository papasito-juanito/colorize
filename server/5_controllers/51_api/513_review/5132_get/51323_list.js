// Local import
const model = require('../../../../7_models');
const query = require('../../../../9_query/93_reviews/932_get/9323_list');

module.exports = async (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[51323_cont ] activated get list query: ${query}`);
  }

  const rows = await model(query, [req.query.color_id, req.user_id]);
  res.json({ success: true, message: req.message, rows });
};
