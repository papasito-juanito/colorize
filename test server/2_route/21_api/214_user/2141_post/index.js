// Global import
const router = require('express').Router();

// Local import
const handler = require('../../../../4_handler/41_api/414_user/4141_post');

router.post('/login', handler.login);
router.post('/signup', handler.signup);

module.exports = router;
