// Global import
const multer = require('multer');

// Local import
const { multerReview } = require('../../0_config');

module.exports = async (req, res) => {
  console.log('[6_utility ] activated upload');

  const storage = await multer.diskStorage(multerReview);
  const upload = await multer({ storage }).single('file');
  upload(req, res, (err) => {
    if (err) {
      res.json({ success: false, message: err.message });
    } else {
      res.json({ success: true, meesage: req.file.path });
    }
  });
};
