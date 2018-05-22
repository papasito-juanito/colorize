// Global import
const router = require('express').Router();

// Local import
const _delete = require('./delete');
const login = require('./login');
const logout = require('./logout');
const signup = require('./signup');

router.use('/delete', _delete);
router.use('/login', login);
router.use('/logout', logout);
router.use('/signup', signup);

module.exports = router;
