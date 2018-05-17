// Global import
const router = require('express').Router();

// Local import
const list = require('./list');

router.use('/list', list);

module.exports = router;
