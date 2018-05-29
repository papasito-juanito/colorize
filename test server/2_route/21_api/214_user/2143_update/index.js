// Global import
const router = require('express').Router();

// Local import
const auth = require('../../../../3_middleware/31_auth');
const handler = require('../../../../4_handler');
const controller = require('../../../../6_controller');

router.post('/', auth, handler, controller);

module.exports = router;
