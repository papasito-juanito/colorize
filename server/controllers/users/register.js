// Local import
const model = require('../../models/users/register');

module.exports = function(req, res) {
  console.log(`[controller] client request like '${req.body}' received...`);
  // let toneName = req.body.toneName;
  let userMail = req.body.userMail;
  let userPassword = req.body.userPassword;
  let userName = req.body.userName;
  let birthDate = req.body.birthDate;
  let gender = req.body.gender;
  
  let params = [userMail, userPassword, userName, birthDate, gender];
  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] database response like '${res}'...`);
      res.send(rows);
    }
  })
};
