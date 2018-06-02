// Local import
const verify = require('../../../../6_utility/62_jsonwebtoken/622_verify');
const check = require('../../../../6_utility/63_isDuplicate/634_wishlist');
const model = require('../../../../7_models');
const insert = require('../../../../9_query/95_wishlists/951_post');
const pop = require('../../../../9_query/95_wishlists/953_update');
const hide = require('../../../../9_query/95_wishlists/954_delete');


module.exports = async (req, res) => {
  console.log(`[5_control ] activated query: ${pop}`);

  const decoded = await verify(req.headers.token);
  const exist = await check(req.body.color_id, decoded.user_id);

  if (!exist.length) {
    console.log('insert', insert);
    await model(insert, [req.body.color_id, decoded.user_id]);
    res.json({ success: true, message: true });
  } else {
    switch (exist[0].toggle) {
      case 'true': {
        await model(hide, [req.body.color_id, decoded.user_id]);
        res.json({ success: true, message: false });
        break;
      }
      case 'false': {
        await model(pop, [req.body.color_id, decoded.user_id]);
        res.json({ success: true, message: true });
        break;
      }
      default: {
        res.json({ success: false, message: 'unexpected error' });
        break;
      }
    }
  }
};
