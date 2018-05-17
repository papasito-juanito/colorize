// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/wishLists/delWish');

router.post('/', controller);

module.exports = router;
