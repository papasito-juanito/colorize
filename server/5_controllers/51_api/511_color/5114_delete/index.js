// Local import
const model = require('../../../../7_models');
const check = require('../../../../9_query/91_colors/912_get/9122_check');
const query = require('../../../../9_query/91_colors/914_delete');

module.exports = async (req, res) => {
  console.log(`[5_control ] activated query: ${query}`);

  const rows = await model(check, req.body.color_id);
  if (!rows.length) {
    res.json({ success: false, message: 'invalid color_id' });
  } else {
    await model(query, req.body.color_id);
    res.json({ success: true, message: 'deleted' });
  }
};
