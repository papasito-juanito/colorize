// Global import
const router = require('express').Router();

// Local import
const model = require('../../models/wishLists');

router.get('/wishList', model.wishList);

module.exports = router;
