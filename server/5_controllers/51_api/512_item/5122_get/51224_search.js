// Local import
const model = require('../../../../7_models');
const query = require('../../../../9_query/92_items/922_get/9224_search');

module.exports = async (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[51224_cont] activated search query: ${query}`);
  }

  const rows = await model(query);
  res.json({ success: true, rows });

  // switch (req.query.order_by) {
  //   case 'price DESC': {
  //     const rows = await model(query.price_DESC, req.query.search);
  //     if (!rows.length) {
  //       res.json({ success: false, message: 'Nothing found matching' });
  //     } else {
  //       res.json({ success: true, rows });
  //     }
  //     break;
  //   }
  //   case 'price ASC': {
  //     const rows = await model(query.price_ASC, req.query.search);
  //     if (!rows.length) {
  //       res.json({ success: false, message: 'Nothing found matching' });
  //     } else {
  //       res.json({ success: true, rows });
  //     }
  //     break;
  //   }
  //   case 'avg DESC': {
  //     const rows = await model(query.avg_DESC, req.query.search);
  //     if (!rows.length) {
  //       res.json({ success: false, message: 'Nothing found matching' });
  //     } else {
  //       res.json({ success: true, rows });
  //     }
  //     break;
  //   }
  //   case 'date DESC': {
  //     const rows = await model(query.date_DESC, req.query.search);
  //     if (!rows.length) {
  //       res.json({ success: false, message: 'Nothing found matching' });
  //     } else {
  //       res.json({ success: true, rows });
  //     }
  //     break;
  //   }
  //   case 'reviews DESC': {
  //     const rows = await model(query.reviews_DESC, req.query.search);
  //     if (!rows.length) {
  //       res.json({ success: false, message: 'Nothing found matching' });
  //     } else {
  //       res.json({ success: true, rows });
  //     }
  //     break;
  //   }
  //   default: {
  //     res.json({ success: false, message: 'unexpected error' });
  //     break;
  //   }
  // }
};
