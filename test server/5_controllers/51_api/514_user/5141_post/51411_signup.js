// Local import
const utility = require('../../../../6_utility/63_isDuplicate');
const model = require('../../../../7_models');
const query = require('../../../../9_query/94_users/941_post');

module.exports = (req, res) => {
  const {
    userMail, userPassword, userName, toneName, birthDate, gender,
  } = req.body;
  const params = [userMail, userPassword, userName, toneName, birthDate, gender];
  console.log(`[5_control ] activated query: ${query.signup}`);

  utility.userMail(userMail, (err, rows) => {
    res.send(rows);
  });

  model(query.signup, params, (err, rows) => {
    if (err) res.json({ success: false, message: err });
    else res.json({ success: true, message: rows });
  });
};
