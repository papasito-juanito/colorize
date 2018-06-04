require('dotenv').load();

module.exports = {
  multerReview: {
    destination: 'client/src/assets/reviews',
    filename: (req, file, cb) => {
      cb(null, `${new Date().valueOf()}_${file.originalname}`);
    },
  },
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  },
  bucket: process.env.S3_BUCKET,
  express: {
    port: 8080,
  },
  jwt: {
    secret: 'sBl2',
    expiresIn: '1d',
  },
  mysql: {
    user: 'root',
    password: '',
    database: 'colorize',
  },
};
