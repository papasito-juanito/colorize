// Local import
const model = require('../7_model');

module.exports = (query, params, next) => {
  console.log(`[6_control ] activated params: ${params} `);

  model(query, params, (err, rows) => {
    next(err, rows);
  });
};
