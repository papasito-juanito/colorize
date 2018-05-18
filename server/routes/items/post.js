// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/items/post');

router.post('/', controller);

module.exports = router;
