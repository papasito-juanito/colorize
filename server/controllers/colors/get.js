// Local import
const model = require('../../models/colors/get');

module.exports = function(req, res) {
  console.log(`req.session.user_id`, req.session);
  
  model(function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.send(rows);
      // res.send({'user_id': req.session.user_id, 'rows': rows});
    }
  })
};
