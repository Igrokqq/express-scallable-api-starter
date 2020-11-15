const { Types } = require('mongoose');
const UserModel = require('../model');

module.exports = (id, data) => UserModel.updateOne(
  { _id: Types.ObjectId(id) },
  {
    $set: data,
  },
).exec();
