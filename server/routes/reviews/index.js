// Global import
const router = require('express').Router();

// Local import
const delReview = require('./delReview');
const itemReview = require('./itemReview');
const userInfo = require('./userInfo');
const modify = require('./modify');
const myReview = require('./myReview');
const write = require('./write');

router.use('/delete', delReview);
router.use('/item', itemReview);
router.use('/info', userInfo);
router.use('/modify', modify);
router.use('/user', myReview);
router.use('/write', write);

module.exports = router;
