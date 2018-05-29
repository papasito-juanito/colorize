// Global import
const router = require('express').Router();

// Local import
const handler = require('../../../../4_handler/41_api/414_user/4141_post');
const controller = require('../../../../6_controller');

router.post('/login', handler.login, controller);

module.exports = router;
