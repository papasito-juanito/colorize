// Local import
const model = require('../../models/wishLists/post');

module.exports = (req, res) => {
  const {user_id, color_id} = req.body;  
  const params = [user_id, color_id];

  model(params, (err, rows) => {
    if (err) throw err;
    else res.send({
      login: req.session.userMail ? true : false,
      wish_id: req.body.wish_id,
      post: true
    });
  })
};
