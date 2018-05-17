// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/delWish');

router.post('/', controller);

module.exports = router;
