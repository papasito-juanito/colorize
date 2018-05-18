// Global import
const router = require('express').Router();

// Local import
const _delete = require('./delete');
const itemReview = require('./itemReview');
const userInfo = require('./userInfo');
const modify = require('./modify');
const post = require('./post');
const myReview = require('./myReview');

router.use('/delete', _delete);
router.use('/item', itemReview);
router.use('/info', userInfo);
router.use('/modify', modify);
router.use('/post', post);
router.use('/user', myReview);

module.exports = router;
