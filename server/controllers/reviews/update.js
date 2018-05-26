// Global import
const jwt = require('jsonwebtoken');

// Local import
const model = require('../../models/reviews/update');
const db = require('../../db');

module.exports = {
    message: (req, res) => {  
    const {review_id, reviewPhoto, reviewRating, reviewMessage} = req.body;  
    const params = [reviewPhoto, reviewRating, reviewMessage, review_id];

    model(params, (err, rows) => {
      if (err) throw err;
      else res.send({
        login: req.session.userMail ? true : false,
        review_id: req.body.review_id,
        update: true
      });
    })
  },

  like: (req, res) => {
    
    const userMail = jwt.verify(req.headers.token, 'jwt-secret').userMail;
    const review_id = req.body.review_id;
    const params = [review_id, userMail];

    db.query(`SELECT u.userMail, r.id review_id, rl.likeToggle toggle 
    FROM reviewLikes rl, reviews r, users u
    WHERE r.reviewToggle='true' AND u.userToggle='true' AND
    u.id=rl.users_id AND r.id=rl.reviews_id AND
    rl.reviews_id=${review_id} AND u.userMail=${userMail};`, (err, rows) => {
      if (err) throw err;
      else {
        if (!rows.length) {
          db.query(`INSERT INTO reviewLikes (reviews_id, users_id)
            VALUES (${review_id}, (SELECT id FROM users WHERE userMail="${userMail}"));`)
        }
        else if (rows[0].toggle === 'true') {
          model.like.true(params, (err, rows) => {
            if (err) throw err;
            else res.send({toggle: 'false'});
          })
        }
        else {
          model.like.false(params, (err, rows) => {
            if (err) throw err;
            else res.send({toggle: 'true'})
          })
        }
      }
    })
  }
}
