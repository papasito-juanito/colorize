// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/items/list');

router.get('/', controller);

module.exports = router;
