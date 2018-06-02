// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/colors/post');

router.post('/', controller);

module.exports = router;
