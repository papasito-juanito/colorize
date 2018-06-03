// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/items/get');

router.get('/detail', controller.detail);
router.get('/list', controller.list);
router.get('/rate', controller.rate);

module.exports = router;
