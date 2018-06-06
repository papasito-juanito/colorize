// Global import
const router = require('express').Router();

// Local import
const auth = require('../../../3_middlewares/31_jsonwebtoken/312_verify');
const controller = require('../../../5_controllers/51_api/515_wishlist/5154_delete');

router.post('/', auth, controller);

module.exports = router;
