// Global import
const jwt = require('jsonwebtoken');

// Local import
const { secret } = require('../../0_config');
const mysql = require('../../8_mysql');
const query = require('../../9_query');

module.exports = (req, res, next) => {
  const { userMail } = jwt.verify(req.headers.token, secret);
  console.log(`[3_middle  ] activated userMail: ${userMail}`);
  mysql.query(query, userMail, (err, rows) => {
    console.log(`[3_middle  ] activated rows: ${rows}`);
    if (!rows.length === 1) {
      res.json({ success: false, message: 'invalid token' });
    } else {
      req.user_id = rows[0].id;
      next();
    }
  });
};
