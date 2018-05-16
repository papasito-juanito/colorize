// Global import
const router = require('express').Router();

// Local import
const color = require('./color');

router.use('/color/*', color);

module.exports = router;
