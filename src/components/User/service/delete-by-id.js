const UserRepository = require('../repository');

module.exports = (id) => UserRepository.deleteById(id);
