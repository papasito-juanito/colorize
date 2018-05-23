// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/users/get');

router.post('/login', controller.login);
router.post('/logout', controller.logout);

module.exports = router;
