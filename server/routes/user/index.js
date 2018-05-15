// Global import
const router = require('express').Router();

// Local import
const register = require('./register');
const signup = require('./signup');
const login = require('./login');
const delUser = require('./delUser');

router.use('/register', register);
router.use('/signup', signup);
router.use('/login', login);
router.use('/delUser', delUser);

module.exports = router;
