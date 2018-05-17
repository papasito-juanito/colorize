// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/addWish');

router.post('/', controller);

module.exports = router;
