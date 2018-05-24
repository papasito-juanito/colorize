// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/users/get');

router.get('/check', controller.check);
router.get('/info', controller.info);
router.get('/login', controller.login);
router.get('/logout', controller.logout);

module.exports = router;
