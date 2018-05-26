// Global import
const router = require('express').Router();

// Local import
const middleware = require('../middlewares/isAuthenticated');

const color = require('./colors');
const item = require('./items');
const review = require('./reviews');
const user = require('./users');
const wishList = require('./wishLists');

router.use('/color', color);
router.use('/item', item);
router.use('/review', review);
router.use('/user', user);
router.use('/wishlist', middleware, wishList);

module.exports = router;
