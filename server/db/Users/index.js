// Local import
const delUser = require('./delUser');
const login = require('./login');
const register = require('./register');
const signup = require('./signup');

module.exports.users = { delUser, login, register, signup };
