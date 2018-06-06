// Local import
const model = require('../../../../7_models');
const query = require('../../../../9_query/94_users/942_get/9421_info');

module.exports = async (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[51421_cont] activated info query: ${query}`);
  }

  const rows = await model(query, req.user_id);
  res.json({ success: true, rows });
};
