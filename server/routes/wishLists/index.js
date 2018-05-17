// Global import
const router = require('express').Router();

// Local import
const addWish = require('./addWish');
const delWish = require('./delWish');
const list = require('./list');

router.use('/add', addWish);
router.use('/delete', delWish);
router.use('/list', list);

module.exports = router;
