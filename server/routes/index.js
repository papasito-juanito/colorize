// Global import
const router = require('express').Router();

// Local import
const color = require('./colors');
const item = require('./items');
const review = require('./reviews');
const user = require('./users');
const wishList = require('./wishLists');

// need to understand
// router.use('/*', (req, res, next) => {
//     res.setHeader("Expires", "-1");
//     res.setHeader("Cache-Control", "must-revalidate, private");
//     next();
// });

router.use('/color', color);
router.use('/item', item);
router.use('/review', review);
router.use('/user', user);
router.use('/wishlist', wishList);

module.exports = router;
