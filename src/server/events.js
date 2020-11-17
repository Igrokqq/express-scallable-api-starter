/**
 * @function
 * @param  {NodeJS.ErrnoException} error
 * @param  {number|string|boolean} port
 * @returns throw error
 */
function onError(error, port) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  if (error.code === 'EACCES') {
    console.error(`${bind} requires elevated privileges`);
    process.exit(1);
  }
  if (error.code === 'EADDRINUSE') {
    console.error(`${bind} is already in use`);
    process.exit(1);
  }

  throw error;
}
/**
 * @function
 * @inner
 * @description log port to console
 */
function onListening() {
  const addr = this.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;

  console.log(`Listening on ${bind}`);
}

/**
 * @function
 * @inner
 * @param {http.Server} Server
 * @param {number} port
 */
function bind(Server, port) {
  Server.on('error', (error) => this.onError(error, port));
  Server.on('listening', this.onListening.bind(Server));
}

module.exports = {
  onError,
  onListening,
  bind,
};
