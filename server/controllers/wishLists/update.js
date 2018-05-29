// Global import
const jwt = require('jsonwebtoken');

// Local import
const model = require('../../models/wishLists/update');
const db = require('../../db')

module.exports = (req, res) => {
  const userMail = jwt.verify(req.headers.token, 'jwt-secret').userMail;
  const params = [req.body.color_id, userMail];

  db.query(`SELECT * FROM wishLists WHERE itemColors_id=? AND (SELECT id FROM users WHERE userMail=?);`, params, (err, rows) => {
    if (err) throw err;
    else if (!rows.length) {
      db.query(`INSERT INTO wishLists (itemColors_id, users_id)
          VALUES (?,(SELECT id FROM users WHERE userMail=?));`, params);
    } else if (rows[0].wishToggle === 'true') {
      db.query(`UPDATE wishLists SET wishToggle="false" WHERE itemColors_id=? AND users_id=(SELECT id FROM users WHERE userMail=?)`, params, (err, rows) => {
        if (err) throw err;
        else res.send({ toggle: 'false' });
      });
    } else {
      db.query(`UPDATE wishLists SET wishToggle="true" WHERE itemColors_id=? AND users_id=(SELECT id FROM users WHERE userMail=?)`, params, (err, rows) => {
        if (err) throw err;
        else res.send({ toggle: 'true' });
      });
    }
  });
};