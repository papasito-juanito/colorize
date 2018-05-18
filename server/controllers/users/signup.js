// Local import
const model = require('../../models/users/signup');

module.exports = function(req, res) {
  console.log('[req.body  ]',req.body);
  console.log(`[controller] received request from client...`);
  
  let userMail = req.body.userMail;
  let userPassword = req.body.userPassword;
  let userName = req.body.userName;
  let toneName = req.body.toneName;
  let birthDate = req.body.birthDate;
  let gender = req.body.gender;
  
  let params = [userMail, userPassword, userName, toneName, birthDate, gender];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.end('signup success');
    }
  })
};
