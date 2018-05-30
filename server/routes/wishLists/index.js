// Global import
const router = require('express').Router();

// Local import
const DELETE = require('./delete');
const GET = require('./get');
const POST = require('./post');
// const UPDATE = require('./update');

router.use('/delete', DELETE);
router.use('/get', GET);
router.use('/post', POST);
// router.use('/update', UPDATE);

module.exports = router;
