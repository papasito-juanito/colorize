// Local import
const model = require('../../../../7_models');
const query = require('../../../../9_query/93_reviews/932_get/9324_user');

module.exports = async (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[51324_cont ] activated get user query: ${query}`);
  }

  const rows = await model(query, req.user_id);
  res.json({ success: true, rows });
};
