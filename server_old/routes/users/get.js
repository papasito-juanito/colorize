// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/users/get');
const middleware = require('../../middlewares/isAuthenticated');

router.get('/check', middleware, controller.check);
router.get('/info', middleware, controller.info);

module.exports = router;
