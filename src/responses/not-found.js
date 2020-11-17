const BaseResponse = require('./base');
/**
 * @exports
 * @extends Error
 */
class NotFound extends BaseResponse {
  /**
     * @constructor
     * @param {string} message
     * @param {object|null} details
     */
  constructor(message = '', details = null) {
    super();
    this.status = this.httpCodes.NOT_FOUND;
    this.message = message;
    this.details = details;
    this.name = 'E_NOT_FOUND';
  }

  get body() {
    return {
      message: this.message,
      details: this.details,
      name: this.name,
    };
  }
}

module.exports = NotFound;
