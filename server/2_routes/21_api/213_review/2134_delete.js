// Global import
const router = require('express').Router();

// Local import
const auth = require('../../../3_middlewares/31_auth');
const controller = require('../../../5_controllers/51_api/513_review/5134_delete');

router.post('/', auth.user, controller);

module.exports = router;
