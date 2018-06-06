// Local import
const model = require('../../../../7_models');
const query = require('../../../../9_query/95_wishlists/954_delete');

module.exports = async (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[5154_cont ] activated delete query: ${query}`);
  }

  await model(query, [req.body.color_id, req.user_id]);
  res.json({ success: true, message: 'deleted' });
};
