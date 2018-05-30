// Global import
const router = require('express').Router();

// Local import
const controller = require('../../../../5_controllers/51_api/514_user/5141_post');

router.post('/signup', controller.signup);
// router.post('/login', controller.login);

module.exports = router;
