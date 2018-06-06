// Local import
const model = require('../../../../7_models');
const query = require('../../../../9_query/92_items/922_get/9222_detail');

module.exports = async (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[51222_cont] activated detail query: ${query.visitor}`);
  }

  switch (req.user_id) {
    case true: {
      const rows = await model(query.member, [req.query.color_id, req.user_id]);
      res.json({ success: true, message: req.user_id, rows });
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
