const { Types } = require('mongoose');

const UserModel = require('../model');

module.exports = (id) => UserModel.findOne({ _id: Types.ObjectId(id) }).exec();
