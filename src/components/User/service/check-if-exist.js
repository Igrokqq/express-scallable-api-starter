const UserRepository = require('../repository');

module.exports = async (inputs) => {
  const exists = await UserRepository.checkIfExist(inputs);

  return exists;
};
