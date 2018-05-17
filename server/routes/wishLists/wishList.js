// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/wishLists');

router.get('/', controller);

module.exports = router;
