// Global import
const jwt = require('jsonwebtoken');

// Local import
const model = require('../../models/reviews/post');

module.exports = {
  message: (req, res) => {

    const userMail = jwt.verify(req.headers.token, 'jwt-secret').userMail;

    const {color_id, reviewPhoto, reviewRating, reviewMessage} = req.body;
    const params = [color_id, reviewPhoto, reviewRating, userMail, reviewMessage];
    model(params, (err, rows) => {
      if (err) throw err;
      else res.send('posted');
    })
  },

  upload: (req, res) => {
    const imageFile = req.files.file;
  
    imageFile.mv(`../client/src/assets/reviews/${req.body.filename}.jpg`, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
  
      res.json({file: `../client/src/assets/reviews/${req.body.filename}.jpg`});
    }); 
  }
};
