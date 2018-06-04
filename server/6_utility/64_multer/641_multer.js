// Global import
const multer = require('multer');

// Local import
const { multerConfig } = require('../../0_config');

module.exports = (req, res) => {
  const upload = multer({
    storage: multer.diskStorage({
      destination: multerConfig.dest,
      filename: (req, file, cb) => {
        cb(null, new Date().valueOf() + file.originalname);
      },
    }),
  }).single('file');
  upload(req, res, (err) => {
    if (err) {
      console.log('err');
    } else {
      console.log(`[6_utility ] activated file: ${req.file.filename}`);
      res.json({ success: true, meesage: req.file.path });
    }
  });
};
