const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URL || 'http://localhost:27017';

const connectOptions = {
  // automatically try to reconnect when it loses connection
  autoReconnect: true,
  // reconnect every reconnectInterval milliseconds
  // for reconnectTries times
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000,
  // change default collection.ensureIndex on collection.createIndex.
  useCreateIndex: true,
  // flag to allow users to fall back to the old
  // parser if they find a bug in the new parse
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = mongoose.createConnection(MONGODB_URI, connectOptions);
