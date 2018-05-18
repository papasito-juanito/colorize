// Global import
const router = require('express').Router();

// Local import
const _delete = require('./delete');
const _get = require('./get');
const _post = require('./post');
const _update = require('./update');

router.use('/delete', _delete);
router.use('/get', _get);
router.use('/post', _post);
router.use('/update', _update);

module.exports = router;
