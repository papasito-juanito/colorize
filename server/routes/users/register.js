// Global import
const router = require('express').Router();

// Local import
const controller = require('../../controllers/users/register');
console.log('/routes/users/register');
router.post('/', controller);
router.get('/', () => {
  console.log('hello world root')
});
module.exports = router;
