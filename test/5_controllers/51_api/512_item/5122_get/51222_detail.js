// Local import
const verify = require('../../../../6_utility/62_jsonwebtoken/622_verify');
const model = require('../../../../7_models');
const query = require('../../../../9_query/92_items/922_get/9222_detail');

module.exports = async (req, res) => {
  console.log(`[5_control ] activated query: ${query.visitor}`);

  const decoded = await verify(req.headers.token);

  switch (decoded.success) {
    case true: {
      const rows = await model(query.member, [req.query.color_id, decoded.id]);
      res.json({ success: true, message: decoded.userMail, rows });
      break;
    }
    case false: {
      const rows = await model(query.visitor, req.query.color_id);
      res.json({ success: true, message: 'unknown visitor', rows });
      break;
    }
    default: {
      res.json({ success: false, message: 'unexpected error' });
      break;
    }
  }
};
