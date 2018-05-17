// Global import
const router = require('express').Router();

// Local import
const model = require('../../models/users');

router.post('/register', model.register);


module.exports = router;
