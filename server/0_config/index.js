module.exports = {
  multerConfig: {
    dest: 'uploads/',
    filename: 'file',
  },
  multerS3Config: {
    accessKeyID: 'AKIAJHAOFQZPM5DDGSQA',
    secretAccessKey: '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',
  },
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
