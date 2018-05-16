// Global import
const router = require('express').Router();

// Local import
const model = require('../../models/users');

router.post('/delUser', model.delUser);

module.exports = router;
