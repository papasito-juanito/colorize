// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/items/detail');

router.get('/', controller);

module.exports = router;
