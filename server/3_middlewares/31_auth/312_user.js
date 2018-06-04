// Global import
const jsonwebtoken = require('jsonwebtoken');

// Local import
const { jwt } = require('../../0_config');
const mysql = require('../../8_mysql');
const query = require('../../9_query/94_users/942_get/9421_check');

module.exports = (req, res, next) => {
  console.log('[3_middle  ] activated token');

  if (req.headers.token === undefined) {
    res.json({ success: false, message: 'provide token' });
  } else {
    jsonwebtoken.verify(req.headers.token, jwt.secret, (err, decoded) => {
      if (err) {
        res.json({ success: false, message: err.message });
      } else {
        mysql.query(query.userMail, decoded.userMail, (error, rows) => {
          if (error) {
            res.json({ success: false, message: 'invalid mail' });
          } else if (rows.length) {
            req.user_id = decoded.user_id;
            next();
          }
        });
      }
    });
  }
};
