const UserValidation = require('../validation');
const UserService = require('../service');

const OkResponse = require('../../../responses/ok.response');

module.exports = {
  dto: (inputs) => UserValidation.updateById(inputs),

  fn: async (inputs) => {
    const { id, ...data } = inputs;
    const user = await UserService.updateById(id, data);

    return new OkResponse(user);
  },
};
