const { Types } = require('mongoose');
const UserModel = require('../model');

module.exports = (id) => UserModel.deleteOne({ _id: Types.ObjectId(id) }).exec();
