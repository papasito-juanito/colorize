// Local import
const model = require('../../../../7_models');
const query = require('../../../../9_query/95_wishlists/952_get/9521_list');

module.exports = async (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[5152_cont ] activated get query: ${query}`);
  }

  const rows = await model(query, req.user_id);
  res.json({ success: true, rows });
};
