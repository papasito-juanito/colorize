// Local import
const controller = require('../../../../6_controller');
const query = require('../../../../9_query/94_user/941_post/login');


module.exports = (req, res) => {
  const { userMail, userPassword } = req.body;
  const params = [userMail, userPassword];
  console.log(`[4_handler ] activated query: ${query}`);

  controller(query, params)
    .then((rows) => { res.send(rows); });
  // controller(query, params, (err, rows) => {
  //   res.send(rows);
  // });
};
