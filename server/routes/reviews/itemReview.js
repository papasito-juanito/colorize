// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/reviews/itemReview');

router.get('/', controller);

module.exports = router;
