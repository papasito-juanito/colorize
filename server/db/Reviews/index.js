// Local import
const write = require('./write');
const modify = require('./modify');
const delete = require('./delete');
const review = require('./review');

const Review = { write, modify, delete, review};

module.exports = Review;
