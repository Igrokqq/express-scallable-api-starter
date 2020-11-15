const UserService = require('../service');
const UserValidation = require('../validation');

const OkResponse = require('../../../responses/ok.response');

module.exports = {
  dto: (inputs) => UserValidation.deleteById(inputs),

  fn: async ({ id }) => {
    const user = await UserService.deleteById(id);

    return new OkResponse(user);
  },
};
