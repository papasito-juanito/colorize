// Local import
const model = require('../../models/reviews/post');

module.exports = function(req, res) {
  console.log('[color_id  ]',req.body.color_id);
  console.log('[photo     ]',req.body.reviewPhoto);
  console.log('[rating    ]',req.body.reviewRating);
  console.log('[user_id   ]',req.body.user_id);
  console.log('[message   ]',req.body.reviewMessage);
  console.log(`[controller] received request from client...`);

  let color_id = req.body.color_id;
  let reviewPhoto = req.body.reviewPhoto;
  let reviewRating = req.body.reviewRating;
  let user_id = req.body.user_id;
  let reviewMessage = req.body.reviewMessage;
  
  let params = [color_id, reviewPhoto, reviewRating, user_id, reviewMessage];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.end('review posted');
    }
  })
};
