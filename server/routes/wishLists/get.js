// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/wishLists/get');
const middleware = require('../../middlewares/isAuthenticated');

router.get('/check', middleware, controller.check);
router.get('/list', middleware, controller.list);

module.exports = router;
