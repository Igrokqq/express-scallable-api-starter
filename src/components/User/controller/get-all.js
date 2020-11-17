const getAll = require('../service/get-all');

module.exports = {
  fn: async () => {
    const users = await getAll();

    return new this.OkResponse(users);
  },
};
