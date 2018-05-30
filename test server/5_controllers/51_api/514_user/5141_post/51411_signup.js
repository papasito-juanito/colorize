// Local import
const hash = require('../../../../6_utility/61_bcrypt/611_hash');
const check = require('../../../../6_utility/63_isDuplicate');
const model = require('../../../../7_models');
const query = require('../../../../9_query/94_users/941_post/9411_signup');

module.exports = async (req, res) => {
  const userPassword = await hash(req.body.userPassword);
  const { userMail, userName, toneName, birthDate, gender } = req.body;
  const params = [userMail, userPassword, userName, toneName, birthDate, gender];
  
  console.log(`[5_control ] activated query: ${query}`);

  const mail = await check.userMail(userMail);
  const name = await check.userName(userName);

  if (mail.length) res.json({ success: false, message: 'invalid mail' });
  else if (name.length) res.json({ sucess: false, message: 'invalid name' });
  else {
    const rows = await model(query, params);
    res.json({ sucess: true, message: `${userMail} registered` });
  }
};
