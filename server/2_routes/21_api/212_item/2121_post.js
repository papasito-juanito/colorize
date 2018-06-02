// Global import
const router = require('express').Router();

// Local import
const auth = require('../../../3_middlewares/31_auth');
const controller = require('../../../5_controllers/51_api/512_item/5121_post');

router.post('/', auth.admin, controller);

module.exports = router;
