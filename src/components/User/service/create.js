const UserRepository = require('../repository');

module.exports = (user) => UserRepository.create(user);
