// Global import
const router = require('express').Router();

// Local import
const auth = require('../../../3_middlewares/31_auth');
const controller = require('../../../5_controllers/51_api/514_user/5143_update');

router.post('/username', auth.user, controller.username);
router.post('/password', auth.user, controller.password);
router.post('/info', auth.user, controller.info);

module.exports = router;
