// Global import
const router = require('express').Router();

// Local import
const user = require('./user');

router.use('/*', (req, res, next) => {
    res.setHeader("Expires", "-1");
    res.setHeader("Cache-Control", "must-revalidate, private");
    next();
});

router.use('/user', user);

module.exports = router;