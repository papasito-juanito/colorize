// Local import
const model = require('../../models/reviews/get');

module.exports = {
  info: (req, res) => {  
    model.info((req.session.userMail || 'invalid access'), (err, rows) => {
      if (err) throw err;
      else res.send({
        login: req.session.userMail ? true : false, 
        result: rows
      });
    })
  },
  
  list: (req, res) => {
    model.list(req.query.color_id, (err, rows) => {
      if (err) throw err;
      else res.send({
        login: req.session.userMail ? true : false, 
        result: rows
      });
    })
  },

  rank: (req, res) => {
    model.rank((req.query.color_id || 'invalid access'), (err, rows) => {
      if (err) throw err;
      else res.send({
        login: req.session.userMail ? true : false, 
        result: rows
      });
    })
  },

  user: (req, res) => {
    model.user((req.session.userMail || 'invalid access'), (err, rows) => {
      if (err) throw err;
      else res.send({
        login: req.session.userMail ? true : false, 
        result: rows
      });
    })
  }
};
