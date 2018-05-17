// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/colors/delColor');

router.post('/', controller);

module.exports = router;
