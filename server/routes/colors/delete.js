// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/colors/delete');

router.post('/', controller);

module.exports = router;
