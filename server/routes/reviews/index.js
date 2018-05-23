// Global import
const router = require('express').Router();

// Local import
const _delete = require('./delete');
const itemReview = require('./itemReview');
const userInfo = require('./userInfo');
const modify = require('./modify');
const _post = require('./post');
const myReview = require('./myReview');
const _rank = require('./rank');

router.use('/delete', _delete);
router.use('/get/list', itemReview);
router.use('/info', userInfo);
router.use('/modify', modify);
router.use('/post', _post);
router.use('/user', myReview);
router.use('/get/rank', _rank);

// const _delete = require('./delete');
// const _get = require('./get');
// const _post = require('./post');
// const _update = require('./update');

// router.use('/delete', _delete);
// router.use('/get', _get);
// router.use('/post', _post);
// router.use('/update', _update);

module.exports = router;
