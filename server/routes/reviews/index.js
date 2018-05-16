// Global import
const router = require('express').Router();

// Local import
const userInfo = require('./userInfo');
const write = require('./write');
const modify = require('./modify');
const delReview = require('./delReview');
const itemReview = require('./itemReview');
const myReview = require('./myReview');

router.use('/review/*', userInfo);
router.use('/review/*', write);
router.use('/review/*', modify);
router.use('/review/*', delReview);
router.use('/review/*', itemReview);
router.use('/review/*', myReview);

module.exports = router;
