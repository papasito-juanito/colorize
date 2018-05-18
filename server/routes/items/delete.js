// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/items/delete');

router.post('/', controller);

module.exports = router;
