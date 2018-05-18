// Global import
const router = require('express').Router();

// Local import
const _delete = require('./delete');
const list = require('./list');

router.use('/delete', _delete);
router.use('/list', list);

module.exports = router;
