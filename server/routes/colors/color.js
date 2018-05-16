// Global import
const router = require('express').Router();

// Local import
const model = require('../../models/colors');

router.get('/color/*', model.color);

module.exports = router;
