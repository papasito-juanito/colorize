// Global import
const router = require('express').Router();

// Local import
const auth = require('../../../3_middlewares/31_jsonwebtoken/313_auth');
const multerS3 = require('../../../3_middlewares/32_multer/322_multerS3');
const controller = require('../../../5_controllers/51_api/513_review/5131_post');

router.post('/message', auth, controller);
router.post('/upload', auth, multerS3);

module.exports = router;
