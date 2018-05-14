// Local import
const register = require('./Register');
const login = require('./Login');
const logout = require('./Logout');

const users = { register, login, logout };

module.exports = users;