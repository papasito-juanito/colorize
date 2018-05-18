// Global import
const router = require('express').Router();

// Local import
const _delete = require('./delete');
const login = require('./login');
const signup = require('./signup');

router.use('/delete', _delete);
router.use('/login', login);
router.use('/signup', signup);

module.exports = router;
