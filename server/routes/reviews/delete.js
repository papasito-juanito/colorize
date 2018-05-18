// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/reviews/delete');

router.post('/', controller);

module.exports = router;
