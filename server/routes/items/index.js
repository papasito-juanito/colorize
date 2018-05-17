// Global import
const router = require('express').Router();

// Local import
const delItem = require('./delItem');
const detail = require('./detail');
const list = require('./list');

router.use('/delete', delItem);
router.use('/detail', detail);
router.use('/list', list);

module.exports = router;
