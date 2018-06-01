// Local import
const verify = require('../../../../6_utility/62_jsonwebtoken/622_verify');
const check = require('../../../../6_utility/63_isDuplicate/633_reviewLikes');
const model = require('../../../../7_models');
const insert = require('../../../../9_query/93_reviews/931_post/9312_like');
const toggle = require('../../../../9_query/93_reviews/933_update/9331_like');

module.exports = async (req, res) => {
  console.log(`[5_control ] activated query: ${toggle.true}`);

  const decoded = await verify(req.headers.token);
  const exist = await check(req.body.review_id, decoded.user_id);

  if (!exist.length) {
    await model(insert, [req.body.review_id, decoded.user_id]);
    res.json({ success: true, message: true });
  } else {
    switch (exist[0].toggle) {
      case 'true': {
        await model(toggle.true, [req.body.review_id, decoded.user_id]);
        res.json({ success: true, message: false });
        break;
      }
      case 'false': {
        await model(toggle.false, [req.body.review_id, decoded.user_id]);
        res.json({ success: true, message: true });
        break;
      }
      default: {
        res.json({ success: false, message: 'unexpected error' });
      }
    }
  }
};
