// Local import
// const model = require('../../7_models');
const mysql = require('../../8_mysql');
const query = require('../../9_query/94_users/942_get/9429_check');

module.exports = (userMail, next) => {
  mysql(query.userMail, userMail, (err, rows) => {
    next(err, rows);
  });
};
