// Global import
const router = require('express').Router();

// Local import
const addWish = require('./addWish');
const _delete = require('./delete');
const list = require('./list');

router.use('/add', addWish);
router.use('/delete', _delete);
router.use('/list', list);

// const _delete = require('./delete');
// const _get = require('./get');
// const _post = require('./post');
// const _update = require('./update');

// router.use('/delete', _delete);
// router.use('/get', _get);
// router.use('/post', _post);
// router.use('/update', _update);

module.exports = router;
