// Global import
const router = require('express').Router();

// Local import
const model = require('../../models/users');

router.get('/signup', model.signup);

module.exports = router;
