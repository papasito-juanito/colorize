// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/wishLists/get');

router.get('/', controller);

module.exports = router;
