// Local import
const model = require('../../../../7_models');
const query = require('../../../../9_query/91_colors/912_get/9121_list');

module.exports = async (req, res) => {
  console.log(`[5_control ] activated query: ${query}`);

  const rows = await model(query);
  res.json({ success: true, rows });
};
