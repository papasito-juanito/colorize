// Global import
const router = require('express').Router();

// Local import
const model = require('../../models/items');

router.delete('/item/*', model.delItem);

module.exports = router;
