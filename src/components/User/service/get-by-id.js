const UsersRepository = require('../repository');

module.exports = async (id) => {
  const foundUser = await UsersRepository.getById(id);

  return foundUser || null;
};
