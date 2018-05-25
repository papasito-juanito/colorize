// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/users/get');
const middleware = require('../../middlewares/isAuthenticated');

router.get('/check', controller.check);
router.get('/info', middleware, controller.info);
router.post('/login', controller.login);
router.get('/logout', middleware, controller.logout);

module.exports = router;
