// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/colors/update');

router.post('/', controller);

module.exports = router;
