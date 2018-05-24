// Local import
const model = require('../../models/users/post');
const middleware = require('../../middlewares/hashPassword');
const db = require('../../db');

module.exports = (req, res) => {

  middleware(req.body.userPassword).then(hash => {
    
    const userPassword = hash;
    const {userMail, userName, toneName, birthDate, gender} = req.body;
    const params = [userMail, userPassword, userName, toneName, birthDate, gender];

    db.query(`SELECT id FROM users WHERE userMail="${userMail}";`, (err, rows) => {
      if (rows.length !== 0) res.send(
        {'result': false, 'message': `${userMail} exists`});
        
      else {
        model(params, (err, rows) => {
          if (err) throw err;
          else res.send(
            {'result': true, 'message': `${userMail} posted`});
        })
      }
    }) 
  })
};
