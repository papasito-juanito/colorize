// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/reviews/write');

router.post('/', controller);

module.exports = router;
