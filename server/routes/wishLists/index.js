// Global import
const router = require('express').Router();

// Local import
const addWish = require('./addWish');
const _delete = require('./delete');
const list = require('./list');

router.use('/add', addWish);
router.use('/delete', _delete);
router.use('/list', list);

module.exports = router;
