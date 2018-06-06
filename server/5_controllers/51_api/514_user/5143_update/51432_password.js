// Local import
const compare = require('../../../../6_utility/61_bcrypt/612_compare');
const model = require('../../../../7_models');
const query = require('../../../../9_query/94_users/943_update/9432_password');

module.exports = async (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[51432_cont] activated compare password query: ${query}`);
  }

  const rows = await model(query, req.user_id);
  const valid = await compare(req.body.userPassword, rows[0].userPassword);
  if (!valid) {
    res.json({ success: false, message: 'invalid password' });
  } else {
    res.json({ success: true, message: 'valid password' });
  }
};
