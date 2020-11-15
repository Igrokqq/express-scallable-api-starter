const UserValidation = require('../validation');
const UserService = require('../service');

const OkResponse = require('../../../responses/ok.response');

module.exports = {
  dto: (data) => UserValidation.getById(data),

  fn: async (req) => {
    const user = await UserService.getById(req.params.id);

    return new OkResponse(user);
  },
};
