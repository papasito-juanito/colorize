// Global import
const router = require('express').Router();

// Local import
const controller = require('../../../5_controllers/51_api/515_wishlist/5151_post');

router.post('/', controller);

module.exports = router;
