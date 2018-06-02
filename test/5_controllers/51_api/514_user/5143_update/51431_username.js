// Local import
const verify = require('../../../../6_utility/62_jsonwebtoken/622_verify');
const check = require('../../../../6_utility/63_isDuplicate/632_userName');
const model = require('../../../../7_models');
const query = require('../../../../9_query/94_users/943_update/9431_username');

module.exports = async (req, res) => {
  console.log(`[5_control ] activated query: ${query}`);

  const decoded = await verify(req.headers.token);
  if (!decoded.success) res.json({ success: false, message: decoded.message });
  else {
    const userName = await check(req.body.userName);
    console.log('username', userName);
    switch (userName.length) {
      case 0: {
        res.json({ success: true, message: 'valid username' });
        break;
      }
      case 1: {
        res.json({ success: false, message: 'invalid username' });
        break;
      }
      default: {
        res.json({ success: false, message: 'unexpected error' });
      }
    }
  }
};
