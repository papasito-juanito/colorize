// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/reviews/get');

router.get('/info', controller.info);
router.get('/list', controller.list);
router.get('/rank', controller.rank);
router.get('/user', controller.user);

module.exports = router;
