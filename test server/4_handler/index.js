// const controller = require('../4_controller');
const query = require('../9_query');

module.exports = async (req, res, next) => {
  const params = req.body.id;
  console.log(`[5_handler ] activated query: ${query}`);
  console.log(`[5_handler ] activated params: ${params}`);
  req.query = query;
  req.params = params;
  next();
};


// module.exports = (req, res, next) => {
//   console.log(`[5_handler ] activated req: ${req.body.id}`);
//   const params = req.body.id;
//   const query = require('../9_query');
//   return {params, query};
// };
