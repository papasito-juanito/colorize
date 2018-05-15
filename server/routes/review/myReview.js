// Global import
const router = require('express').Router();

// Local import
const model = require('../../models/reviews');

router.get('/review/*', model.myReview);

module.exports = router;
