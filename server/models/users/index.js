// Local import
const register = require('./register');
const signup = require('./signup');
const login = require('./login');
const delUser = require('./delUser');

const users = { register, signup, login, delUser };

module.exports = users;