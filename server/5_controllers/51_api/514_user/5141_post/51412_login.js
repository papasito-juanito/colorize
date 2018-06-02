// Local import
const compare = require('../../../../6_utility/61_bcrypt/612_compare');
const sign = require('../../../../6_utility/62_jsonwebtoken/621_sign');
const model = require('../../../../7_models');
const query = require('../../../../9_query/94_users/941_post/9412_login');

module.exports = async (req, res) => {
  console.log(`[5_control ] activated query: ${query}`);

  const rows = await model(query, req.body.userMail);
  if (!rows.length) res.json({ success: false, message: 'invalid mail' });
  else {
    const valid = await compare(req.body.userPassword, rows[0].userPassword);
    if (!valid) res.json({ success: false, message: 'invalid password' });
    else {
      const token = await sign(rows[0].id, req.body.userMail);
      res.json({ success: true, token });
    }
  }
};
