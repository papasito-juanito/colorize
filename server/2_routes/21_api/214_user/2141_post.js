// Global import
const router = require('express').Router();

// Local import
const auth = require('../../../3_middlewares/31_jsonwebtoken/313_auth');
const multerS3 = require('../../../3_middlewares/32_multer/322_multerS3');
const controller = require('../../../5_controllers/51_api/514_user/5141_post');

router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.post('/upload', auth, multerS3);

module.exports = router;
