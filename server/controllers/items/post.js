// Local import
const model = require('../../models/items/post');

module.exports = function(req, res) {
  console.log('[category  ]',req.body.category);
  console.log('[brand     ]',req.body.brand);
  console.log('[name      ]',req.body.name);
  console.log('[volume    ]',req.body.volume);
  console.log('[price     ]',req.body.price);
  console.log('[detail    ]',req.body.detail);
  console.log(`[controller] received request from client...`);
  
  let category = req.body.category;
  let brand = req.body.brand;
  let name = req.body.name;
  let volume = req.body.volume;
  let price = req.body.price;
  let detail = req.body.detail;

  let params = [category, brand, name, volume, price, detail];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.end('selected color is deleted');
    }
  })
};
