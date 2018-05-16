// Global import
const router = require('express').Router();

// Local import
const wishList = require('./wishList');

router.use('/wishList', wishList);

module.exports = router;
