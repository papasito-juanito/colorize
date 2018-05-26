// Global import
const jwt = require('jsonwebtoken');

// Local import
const model = require('../../models/items/get');

module.exports = {
  detail: (req, res) => {  
    model.detail(req.query.color_id, (err, rows) => {
      if (err) throw err;
      else res.send(rows);
    })
  },
  
  list: (req, res) => {

    const color_id = JSON.parse(req.query.color_id);
    const params = [color_id, req.query.order_by];

    model.list(params, (err, rows) => {
      if (err) throw err;
      else res.send(rows);
    })
  },

  rate: (req, res) => {
    model.rate(req.query.color_id, (err, rows) => {
      if (err) throw err;
      else res.send(rows);
    })
  }
}
