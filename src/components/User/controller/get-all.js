const UserService = require('../service');
const OkResponse = require('../../../responses/ok.response');

module.exports = {
  fn: async () => {
    const users = await UserService.getAll();

    return new OkResponse(users);
  },
};
