const validateGetById = require('../validation/get-by-id');
const getById = require('../service/get-by-id');

module.exports = {
  dto: (inputs) => validateGetById(inputs.params),

  async fn(inputs) {
    const { id } = inputs.params;
    const user = await getById(id);

    return new this.OkResponse(user);
  },
};
