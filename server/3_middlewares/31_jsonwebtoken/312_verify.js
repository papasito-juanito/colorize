// Global import
const jwt = require('jsonwebtoken');

// Local import
const { secret } = require('../../0_config');
const mysql = require('../../8_mysql');
const query = require('../../9_query/94_users/942_get/9420_check');

module.exports = (req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('[312_middle] activated verify token');
  }

  if (req.headers.token === undefined) {
    res.json({ success: false, message: 'provide token' });
  } else {
    jwt.verify(req.headers.token, secret, (err, decoded) => {
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
