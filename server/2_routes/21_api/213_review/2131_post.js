// Global import
const router = require('express').Router();

// Local import
const auth = require('../../../3_middlewares/31_auth');
const multerS3 = require('../../../6_utility/64_multer/642_multer-s3');
const controller = require('../../../5_controllers/51_api/513_review/5131_post/51311_message');

router.post('/message', auth.user, controller);
router.post('/upload', auth.user, multerS3);

module.exports = router;
