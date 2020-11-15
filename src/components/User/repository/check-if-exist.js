const UserModel = require('../model');

module.exports = async ({ email }) => {
  const user = await UserModel.findOne({ email });

  return !!user;
};
