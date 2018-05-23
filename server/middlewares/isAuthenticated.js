// Local import
const db = require('../db');

module.exports = async (userMail) =>{
  console.log('userMail');
  var result = await db.query(`SELECT id FROM users WHERE userMail="${userMail}";`);
  return result;
}
