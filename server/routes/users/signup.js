// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/users/signup');

router.post('/', controller);

module.exports = router;
