// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/reviews/update');

router.post('/', controller);

module.exports = router;
