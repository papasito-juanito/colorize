// Global import
const router = require('express').Router();

// Local import
const color = require('./color');

router.use('/collection', color);

module.exports = router;
