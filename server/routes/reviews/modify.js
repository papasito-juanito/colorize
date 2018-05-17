// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/reviews/modify');

router.post('/', controller);

module.exports = router;
