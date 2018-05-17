// Local import
const model = require('../../models/users/delUser');

module.exports = function(req, res) {
  console.log(`[controller] received request from client...`);
  
  let userMail = req.body.userMail;
  let userPassword = req.body.userPassword;
  
  let params = [userMail, userPassword];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.send(rows);
    }
  })
};
