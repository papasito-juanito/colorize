// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/users/post');

router.post('/signup', controller.signup);
router.post('/login', controller.login);

module.exports = router;
