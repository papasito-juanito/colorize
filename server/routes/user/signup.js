// Global import
const router = require('express').Router();

// Local import
const model = require('../../models');

router.get('/signup', model.user.get);

module.exports = router;
