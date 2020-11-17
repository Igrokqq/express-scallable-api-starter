const validateUpdateById = require('../validation/update-by-id');
const updateById = require('../service/update-by-id');

module.exports = {
  dto: (inputs) => validateUpdateById({
    ...inputs.params,
    ...inputs.body,
  }),

  async fn({ body, params }) {
    const { id } = params;

    const user = await updateById(id, body);

    return new this.OkResponse(user);
  },
};
