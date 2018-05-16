// Global import
const router = require('express').Router();

// Local import
const model = require('../../models/items');

router.get('/item/*', model.detail);

module.exports = router;
