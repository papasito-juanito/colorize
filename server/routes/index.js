// Global import
const router = require('express').Router();

// Local import
const user = require('./user');
const color = require('./color');
const item = require('./item');
const review = require('./review');
const wishList = require('./wishList');

router.use('/*', (req, res, next) => {
    res.setHeader("Expires", "-1");
    res.setHeader("Cache-Control", "must-revalidate, private");
    next();
});

router.use('/user', user);
router.use('/color', color);
router.use('/item', item);
router.use('/review', review);
router.use('/wishList', wishList);

module.exports = router;