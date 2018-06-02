// Local import
const verify = require('../../../../6_utility/62_jsonwebtoken/622_verify');
const model = require('../../../../7_models');
const query = require('../../../../9_query/95_wishlists/954_delete');

module.exports = async (req, res) => {
  console.log(`[5_control ] activated query: ${query}`);

  const decoded = await verify(req.headers.token);
  if (!decoded.success) res.json({ success: false, message: decoded.message });
  else {
    await model(query, [req.body.color_id, decoded.user_id]);
    res.json({ success: true, message: 'deleted' });
  }
};
