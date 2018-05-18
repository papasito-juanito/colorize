// Local import
const model = require('../../models/colors/update');

module.exports = function(req, res) {
  console.log('[color_id  ]',req.body.color_id);
  console.log('[itemPhoto ]',req.body.itemPhoto);
  console.log('[itemColor ]',req.body.itemColor);
  console.log('[itemHex   ]',req.body.itemHex);
  console.log('[itemDate  ]',req.body.itemDate);
  console.log(`[controller] received request from client...`);

  let color_id = req.body.color_id;
  let itemPhoto = req.body.itemPhoto;
  let itemColor = req.body.itemColor;
  let itemHex = req.body.itemHex;
  let itemDate = req.body.itemDate;

  let params = [itemPhoto, itemColor, itemHex, itemDate, color_id];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.end('selected color is deleted');
    }
  })
};
