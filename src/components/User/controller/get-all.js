const getAll = require('../service/get-all');

module.exports = {
  async fn() {
    const users = await getAll();

    return new this.OkResponse(users);
  },
};
