// Global import
const router = require('express').Router();

// Local import
const addWish = require('./addWish');
const delwish = require('./delWish');
const wishList = require('./wishList');

router.use('/add', addWish);
router.use('/delete', delWish);
router.use('/list', wishList);

module.exports = router;
