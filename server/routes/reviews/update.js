// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/reviews/update');
const middleware = require('../../middlewares/isAuthenticated');

router.post('/message', middleware, controller.message);
router.post('/like', middleware, controller.like);

module.exports = router;
