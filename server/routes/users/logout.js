// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/users/logout');

router.get('/', controller);

module.exports = router;
