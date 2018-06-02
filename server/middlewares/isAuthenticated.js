// Local import
const db = require('../db');

module.exports = (req, res, next) => {
  jwt.verify(req.headers.token, 'jwt-secret', function(err, decoded){
    if(err){
      console.log(err);
      
      if(err.message='jwt expired'){
        res.json({
          success: false,
          message: 'jwt expired'
        })
      } 
    }
  })
  const userMail = jwt.verify(req.headers.token, 'jwt-secret').userMail;
  console.log('userMail: ', userMail);
  db.query(`SELECT id FROM users WHERE userMail="${userMail}";`, (err, rows) => {
    console.log('rows: ',rows);
    if (!rows.length === 1) {
      res.json({
        success: false,
        message: 'invalid userMail'
      })
    }
    else next();
  })
}