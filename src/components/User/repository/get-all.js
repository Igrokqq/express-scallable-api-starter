const UserModel = require('../model');

module.exports = async () => {
  const users = await UserModel.find();

  return users.length > 0 ? users : [];
};
