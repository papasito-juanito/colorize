// Global import
const jwt = require('jsonwebtoken');
const compose = require('composable-middleware');

// Local import
const config = require('../../config');

module.exports = () => {
  return compose()
    .use((req, res, next) => {
      var decoded = jwt.verify(req.headers.authorization, config.secret);
      console.log(decoded)
      req.user = decode;
    })
    .use((req, res, next) => {
      req.user = {
        id: req.user.id,
        name: 'name of ' + req.user.id
      };
      next();
    });
}
