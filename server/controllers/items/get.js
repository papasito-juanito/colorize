// Local import
const model = require('../../models/items/get');

module.exports = {
  detail: (req, res) => {  
    model.detail(req.query.color_id, (err, rows) => {
      if (err) throw err;
      else res.status(200).send(rows);
    })
  },
  
  list: (req, res) => {
    model.list(JSON.parse(req.query.color_id), (err, rows) => {
      if (err) throw err;
      else res.status(200).send(rows);
    })
  },

  rate: (req, res) => {
    model.rate(req.query.color_id, (err, rows) => {
      if (err) throw err;
      else res.status(200).send(rows);
    })
  }
}
