// Local import
const verify = require('../../../../6_utility/62_jsonwebtoken/622_verify');
const model = require('../../../../7_models');
const query = require('../../../../9_query/94_users/943_update/9433_info');

module.exports = async (req, res) => {
  console.log(`[5_control ] activated query: ${query}`);
  console.log('req.body', req.body)
  const { userPhoto, userName, toneName, userPassword } = req.body;
  const decoded = await verify(req.headers.token);
  const params = [ userPhoto, userName, toneName, userPassword, decoded.user_id ];
  const rows = await model(query, params);
  res.json({ success: true, message: 'updated' });
};
