// Local import
const model = require('../../../../7_models');
const query = require('../../../../9_query/92_items/923_update');

module.exports = async (req, res) => {
  console.log(`[5_control ] activated query: ${query}`);

  const { itemPhoto, itemColor, itemHex, itemDate, color_id } = req.body;
  const params = [itemPhoto, itemColor, itemHex, itemDate, color_id];
  await model(query, params);
  res.json({ success: true, message: 'updated' });
};