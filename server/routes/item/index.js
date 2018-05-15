// Global import
const router = require('express').Router();

// Local import
const list = require('./list');
const detail = require('./detail');
const delItem = require('./delItem');

router.use('/item/*', list);
router.use('/item/*', detail);
router.use('/item/*', delItem);

module.exports = router;
