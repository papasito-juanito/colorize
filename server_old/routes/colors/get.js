// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/colors/get');

router.get('/', controller);

module.exports = router;
