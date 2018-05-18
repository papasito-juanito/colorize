// Global import
const router = require('express').Router();

// Local import
const delItem = require('./delItem');
const detail = require('./detail');
const list = require('./list');
const rate = require('./rate');

router.use('/delete', delItem);
router.use('/detail', detail);
router.use('/list', list);
router.use('/rate', rate);

module.exports = router;
