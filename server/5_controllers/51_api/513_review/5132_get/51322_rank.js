// Local import
const model = require('../../../../7_models');
const query = require('../../../../9_query/93_reviews/932_get/9322_rank');

module.exports = async (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[51322_cont ] activated get rank query: ${query}`);
  }

  console.log('req.user_id', req.user_id);
  const rows = await model(query, [req.query.color_id, req.header.token]);
  res.json({ success: true, rows });
};
