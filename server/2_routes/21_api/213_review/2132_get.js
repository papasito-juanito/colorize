// Global import
const router = require('express').Router();

// Local import
const auth = require('../../../3_middlewares/31_auth');
const controller = require('../../../5_controllers/51_api/513_review/5132_get');

router.get('/info', auth.user, controller.info);
router.get('/rank', controller.rank);
router.get('/list', controller.list);
router.get('/user', auth.user, controller.user);

module.exports = router;
