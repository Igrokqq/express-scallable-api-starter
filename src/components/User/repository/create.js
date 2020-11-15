const UserModel = require('../model');

module.exports = (user) => UserModel.create(user);
