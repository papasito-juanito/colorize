// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/reviews/get');
const middleware = require('../../middlewares/isAuthenticated');

router.get('/info', middleware, controller.info);
router.get('/list', controller.list);
router.get('/rank', controller.rank);
router.get('/user', middleware, controller.user);

module.exports = router;
