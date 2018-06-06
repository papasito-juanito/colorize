// Local import
const model = require('../../../../7_models');
const query = require('../../../../9_query/93_reviews/932_get');

module.exports = async (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[51321_cont ] activated get info query: ${query.check.info}`);
  }

  const check = await model(query.check.info, [req.query.color_id, req.user_id]);
  switch (check.length) {
    case 0: {
      const rows = await model(query.info.zero, req.user_id);
      console.log(`[51321_cont] check.length: ${check.length}`);
      console.log(`[51321_cont] rows: ${rows}`);
      res.json({ success: true, message: 'not written', rows });
      break;
    }
    case 1: {
      const rows = await model(query.info.one, [req.query.color_id, req.user_id]);
      console.log(`[51321_cont] check.length: ${check.length}`);
      console.log(`[51321_cont] rows: ${rows}`);
      res.json({ success: true, message: 'written', rows });
      break;
    }
    default: {
      res.json({ success: false, message: 'unexpected error' });
    }
  }
};
