const deleteById = require('../service/delete-by-id');
const validateDeleteById = require('../validation/delete-by-id');

module.exports = {
  dto: (inputs) => validateDeleteById(inputs.params),

  async fn({ params }) {
    const { id } = params;
    const user = await deleteById(id);

    return new this.OkResponse(user);
  },
};
