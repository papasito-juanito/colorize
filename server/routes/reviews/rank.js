// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/reviews/rank');

router.get('/', controller);

module.exports = router;
