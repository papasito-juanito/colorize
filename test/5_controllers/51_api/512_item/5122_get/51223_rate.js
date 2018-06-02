// Local import
const model = require('../../../../7_models');
const query = require('../../../../9_query/92_items/922_get/9223_rate');

module.exports = async (req, res) => {
  console.log(`[5_control ] activated query: ${query}`);

  const params = [req.query.color_id];
  const rows = await model(query, params);
  res.json({ success: true, rows });
};
