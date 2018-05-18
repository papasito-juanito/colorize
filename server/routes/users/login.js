// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/users/login');

router.post('/', controller);

module.exports = router;
