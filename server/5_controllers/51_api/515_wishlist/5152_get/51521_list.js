// Local import
const verify = require('../../../../6_utility/62_jsonwebtoken/622_verify');
const model = require('../../../../7_models');
const query = require('../../../../9_query/95_wishlists/952_get/9521_list');

module.exports = async (req, res) => {
  console.log(`[5_control ] activated query: ${query}`);

  const decoded = await verify(req.headers.token);
  if (!decoded.success) res.json({ success: false, message: decoded.message });
  else {
    const rows = await model(query, decoded.user_id);
    res.json({ success: true, rows });
  }
};
