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

const connection = mongoose.createConnection(MONGODB_URI, connectOptions);

connection.on('open', () => {
  console.info('database is ready now');
});

connection.on('connected', () => {
  console.info('you was successfully connected to mongodb');
});

connection.on('disconnected', () => {
  console.error('you was disconnected from mongodb');
});

connection.on('error', (error) => {
  console.error(`Oops... Mongoose error ${error}`);
});

module.exports = connection;
