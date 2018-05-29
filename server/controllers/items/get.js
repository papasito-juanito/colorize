// Global import
const jwt = require('jsonwebtoken');

// Local import
const model = require('../../models/items/get');
const db = require('../../db');

module.exports = {
  detail: (req, res) => {
    model.detail(req.query.color_id, (err, rows) => {
      if (err) throw err;
      else res.send(rows);
    });
  },

  list: (req, res) => {
    console.log('order', req.query.order_by);
    const color_id = JSON.parse(req.query.color_id);
    const params = [color_id];

    db.query(`SELECT ic.id color_id, ic.itemHex hex, ic.itemPhoto photo, c.category2Name category,
    ic.itemColor color, b.brandName brand, i.itemName name, i.itemPrice price,
    i.itemVolume volume, ic.itemDate date, rate.total reviews, rate.avg avg 
  FROM itemColors ic, categories2 c, brands b, items i,
    (SELECT ici.id color_id, IFNULL(AVG(rt.reviewRating),0) avg, COUNT(rt.id) total
    FROM itemColors ici
    LEFT JOIN reviews rt
    ON ici.id=rt.itemColors_id AND rt.reviewToggle='true'
    GROUP BY ici.id) rate
  WHERE i.itemToggle='true' AND ic.colorToggle='true' AND
    c.id=i.categories2_id AND b.id=i.brands_id AND i.id=ic.items_id AND
    ic.id=rate.color_id AND ic.id IN (?)
  ORDER BY ${req.query.order_by};`, params, (err, rows) => {
      if (err) throw err;
      else res.send(rows);
    });
  },

  rate: (req, res) => {
    model.rate(req.query.color_id, (err, rows) => {
      if (err) throw err;
      else res.send(rows);
    });
  },
};
