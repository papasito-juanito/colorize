// Local import
const model = require('../../models/colors/post');

module.exports = function(req, res) {
  console.log('[itemName  ]',req.body.itemName);
  console.log('[itemPhoto ]',req.body.itemPhoto);
  console.log('[itemColor ]',req.body.itemColor);
  console.log('[itemHex   ]',req.body.itemHex);
  console.log('[itemDate  ]',req.body.itemDate);
  console.log(`[controller] received request from client...`);
  
  let itemName = req.body.itemName;
  let itemPhoto = req.body.itemPhoto;
  let itemColor = req.body.itemColor;
  let itemHex = req.body.itemHex;
  let itemDate = req.body.itemDate;

  let params = [itemName, itemPhoto, itemColor, itemHex, itemDate];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.end('selected color is deleted');
    }
  })
};
