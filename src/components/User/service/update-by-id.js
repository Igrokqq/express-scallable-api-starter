const UserRepository = require('../repository');

module.exports = (id, data) => UserRepository.updateById(id, data);
