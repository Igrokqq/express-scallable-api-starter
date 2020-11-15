const { Schema } = require('mongoose');
const connections = require('../../db/mongo-connection');

const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
    },
  },
  {
    collection: 'usermodel',
    versionKey: false,
  },
);

module.exports = connections.model('UserModel', UserSchema);
