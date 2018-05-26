// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/reviews/post');

router.post('/upload', controller.upload);
router.post('/message', controller.message);

module.exports = router;
