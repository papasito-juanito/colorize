// Local import
const userInfo = require('./userInfo');
const write = require('./write');
const modify = require('./modify');
const delReview = require('./delReview');
const itemReview = require('./itemReview');
const myReview = require('./myReview');

const reviews = { userInfo, write, modify, delReview, itemReview, myReview };

module.exports = reviews;
