// Local import
const model = require('../../../../7_models');
const query = require('../../../../9_query/91_colors/913_update');

module.exports = async (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[5113_cont ] activated update query: ${query}`);
  }
  const { itemPhoto, itemColor, itemHex, itemDate, color_id } = req.body;
  const params = [itemPhoto, itemColor, itemHex, itemDate, color_id];
  await model(query, params);
  res.json({ success: true, message: 'updated' });
};
