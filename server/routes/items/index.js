// Global import
const router = require('express').Router();

// Local import
const _delete = require('./delete');
const detail = require('./detail');
const list = require('./list');
const rate = require('./rate');

router.use('/delete', _delete);
router.use('/detail', detail);
router.use('/list', list);
router.use('/rate', rate);

module.exports = router;
