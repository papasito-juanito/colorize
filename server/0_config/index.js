module.exports = {
  multerReview: {
    destination: 'client/src/assets/reviews',
    filename: (req, file, cb) => {
      cb(null, `${new Date().valueOf()}_${file.originalname}`);
    },
  },
  credentials: {
    accessKeyId: 'AKIAJHAOFQZPM5DDGSQA',
    secretAccessKey: '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',
    region: 'us-west-2',
  },
  bucket: 'colorize.io',
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
