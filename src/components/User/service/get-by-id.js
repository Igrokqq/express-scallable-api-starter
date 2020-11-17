const getById = require('../repository/get-by-id');

module.exports = async (id) => {
  const foundUser = await getById(id);

  return foundUser || null;
};
