const BaseResponse = require('./base');
/**
 * @exports
 * @extends Error
 */
class ServerError extends BaseResponse {
  /**
   * @constructor
   * @param {string} message
   * @param {object|null} details
   */
  constructor(message = '', details = null) {
    super();
    this.status = this.httpCodes.SERVER_ERROR;
    this.message = message || 'Internal Server Error';
    this.details = details;
    this.name = 'E_SERVER_ERROR';
  }

  get body() {
    return {
      message: this.message,
      details: this.details,
      name: this.name,
    };
  }
}

module.exports = ServerError;
