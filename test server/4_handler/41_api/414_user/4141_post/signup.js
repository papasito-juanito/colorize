// Local import
const controller = require('../../../../6_controller');
const postQuery = require('../../../../9_query/94_user/941_post');
const getQuery = require('../../../../9_query/94_user/942_get');

module.exports = (req, res) => {
  const { userMail, userPassword, userName, toneName, birthDate, gender } = req.body;
  const params = [userMail, userPassword, userName, toneName, birthDate, gender];
  console.log(`[4_handler ] activated getQuery: ${getQuery.userMail}`);
  controller(getQuery.userMail, userMail, (err, rows) => {
    res.send(rows);
  });
    // .then((rows) => { res.send(rows); });
};
