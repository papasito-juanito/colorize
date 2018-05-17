// Global import
const router = require('express').Router();

// Local import
const delUser = require('./delUser');
const login = require('./login');
const signup = require('./signup');

router.use('/delete', delUser);
router.use('/login', login);
router.use('/signup', signup);

module.exports = router;
