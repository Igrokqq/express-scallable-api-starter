const UserValidation = require('../validation');
const UserService = require('../service');

const CreatedResponse = require('../../../responses/created.response');
const ConflictResponse = require('../../../responses/conflict.response');

module.exports = {
  dto: (data) => UserValidation.create(data),

  fn: async (inputs) => {
    const userExists = await UserService.checkIfExist(inputs);

    if (userExists) {
      return new ConflictResponse('User already exists');
    }
    await UserService.create(inputs);

    return new CreatedResponse();
  },
};
