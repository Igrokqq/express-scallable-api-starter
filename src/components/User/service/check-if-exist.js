const checkIfExist = require('../repository/check-if-exist');

module.exports = async (inputs) => {
  const exists = await checkIfExist(inputs);

  return exists;
};
