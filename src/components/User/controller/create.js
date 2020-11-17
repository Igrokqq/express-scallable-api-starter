const validateCreate = require('../validation/create');
const checkIfExist = require('../service/check-if-exist');
const create = require('../service/create');

module.exports = {
  dto: (inputs) => validateCreate(inputs.body),

  // constants: {
  //   TEST_CONSTANT: 'test',
  // },

  async fn(inputs) {
    const userExists = await checkIfExist(inputs.body);

    if (userExists) {
      return new this.ConflictResponse('User already exists');
    }
    await create(inputs.body);

    return new this.CreatedResponse();
  },
};
