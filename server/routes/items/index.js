// Global import
const router = require('express').Router();

// Local import
const _delete = require('./delete');
const detail = require('./detail');
const list = require('./list');
const rate = require('./rate');
const post = require('./post');

router.use('/delete', _delete);
router.use('/detail', detail);
router.use('/list', list);
router.use('/rate', rate);
router.use('/post', post);

// const _delete = require('./delete');
// const _get = require('./get');
// const _post = require('./post');
// const _update = require('./update');

// router.use('/delete', _delete);
// router.use('/get', _get);
// router.use('/post', _post);
// router.use('/update', _update);

module.exports = router;
