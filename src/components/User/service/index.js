const create = require('./create');
const getById = require('./get-by-id');
const getAll = require('./get-all');
const updateById = require('./update-by-id');
const deleteById = require('./delete-by-id');
const checkIfExist = require('./check-if-exist');

module.exports = {
  create,
  getById,
  getAll,
  updateById,
  deleteById,
  checkIfExist,
};
