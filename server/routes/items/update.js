// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/items/update');

router.post('/', controller);

module.exports = router;
