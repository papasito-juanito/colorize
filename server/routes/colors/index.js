// Global import
const router = require('express').Router();

// Local import
const delColor = require('./delColor');
const list = require('./list');

router.use('/delete', delColor);
router.use('/list', list);

module.exports = router;
