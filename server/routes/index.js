// Global import
const router = require('express').Router();

// Local import
const user = require('./user');
const item = require('./item');
const color = require('./color');

router.use('/*', (req, res, next) => {
    res.setHeader("Expires", "-1");
    res.setHeader("Cache-Control", "must-revalidate, private");
    next();
});

router.use('/user', user);
router.use('/item', item);
router.use('/color', color);

module.exports = router;