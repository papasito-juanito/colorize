// Global import
const router = require('express').Router();

// Local import
const item = require('./item');

router.use('/item/*', item);

module.exports = router;
