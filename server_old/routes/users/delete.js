// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/users/delete');
const middleware = require('../../middlewares/isAuthenticated');

router.post('/', middleware, controller);

module.exports = router;
