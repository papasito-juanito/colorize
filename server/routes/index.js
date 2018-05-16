// Global import
const router = require('express').Router();

// Local import
// const color = require('./colors');
// const item = require('./items');
// const review = require('./reviews');
const user = require('./users');
// const wishList = require('./wishLists');

// router.use('/*', (req, res, next) => {
//     res.setHeader("Expires", "-1");
//     res.setHeader("Cache-Control", "must-revalidate, private");
//     next();
// });
console.log('/routes/index')
console.log('@@@@@@@#')
console.log('@@@@@@@#')
console.log('@@@@@@@#')
// router.use('/color', color);
// router.use('/item', item);
// router.use('/review', review);

router.use('/user', user);
// router.use('/wishList', wishList);

module.exports = router;
