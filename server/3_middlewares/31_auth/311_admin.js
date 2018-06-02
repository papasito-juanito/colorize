// Global import
const jsonwebtoken = require('jsonwebtoken');

// Local import
const { jwt } = require('../../0_config');
const model = require('../../7_models');
const query = require('../../9_query/94_users/942_get/9421_check');

module.exports = async (req, res, next) => {
  console.log(`[3_middle  ] activated token: ${req.headers.token}`);

  if (!req.headers.token) {
    res.json({ success: false, message: 'send token' });
  } else {
    const { userMail } = await jsonwebtoken.verify(req.headers.token, jwt.secret);
    const rows = await model(query.userMail, userMail);
    if (!rows.length) {
      res.json({ success: false, message: 'invalid token' });
    } else if (rows[0].id === 1) {
      next();
    } else {
      res.json({ success: false, message: 'admin only' });
    }
  }
};
