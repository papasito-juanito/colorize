// Local import
const delReview = require('./delReview');
const itemReview = require('./itemReview');
const modify = require('./modify');
const myReview = require('./myReview');
const userInfo = require('./userInfo');
const write = require('./write');

module.exports.reviews = { delReview, itemReview, modify, myReview, userInfo, write };
