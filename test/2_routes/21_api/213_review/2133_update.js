// Global import
const router = require('express').Router();

// Local import
const auth = require('../../../3_middlewares/31_auth');
const controller = require('../../../5_controllers/51_api/513_review/5133_update');

router.post('/like', auth.user, controller.like);
router.post('/message', auth.user, controller.message);

module.exports = router;
