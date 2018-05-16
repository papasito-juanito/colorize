// Local import
const model = require('../../models/colors');
const query = require('../../db/colors')

module.exports.colors = function(req, res) {
  console.log(`[controller] client request like '${req.body.colors}' received...`);
  var params = [req.body.colors];
  model.colors(query, params, function(err, rows) {
    console.log(`[controller] send query like '${query}' to database...`);
    if (err) { throw err }
    else {
      console.log(`[controller] database response like '${res}'...`);
      res.send(rows);
    }
  })
};
