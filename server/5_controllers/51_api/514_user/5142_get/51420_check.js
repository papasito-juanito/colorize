// Local import
const model = require('../../../../7_models');
const query = require('../../../../9_query/94_users/942_get/9420_check');

module.exports = async (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[51420_cont] activated check query: ${query}`);
  }

  await model(query.userMail, req.user_id);
  res.json({ success: true, user_id: req.user_id });
};
