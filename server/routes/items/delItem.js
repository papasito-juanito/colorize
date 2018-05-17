// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/items/delItem');

router.post('/', controller);

module.exports = router;
