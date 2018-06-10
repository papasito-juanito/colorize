// Local import
const model = require('../../../../7_models');
const check = require('../../../../9_query/91_colors/912_get/9120_check');
const query = require('../../../../9_query/91_colors/913_update/9132_upload');

module.exports = async (req, res) => {
  try {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[51132_cont] activated update query: ${query}`);
    }
    const url = await model(check, req.body.color_id);
    console.log('url', url);

    // const {
    //   itemPhoto, itemColor, itemHex, itemDate, color_id,
    // } = req.body;
    // const params = [itemPhoto, itemColor, itemHex, itemDate, color_id];
    // await model(query, params);
    // res.json({ success: true, message: 'updated' });
  } catch (error) {
    res.json({ success: false, message: error.stack });
  }
};
