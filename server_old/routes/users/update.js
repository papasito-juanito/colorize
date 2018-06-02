// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/users/update');
const middleware = require('../../middlewares/isAuthenticated');

router.post('/', middleware, controller);

module.exports = router;
