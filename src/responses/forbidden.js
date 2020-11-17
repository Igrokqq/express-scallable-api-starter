const BaseResponse = require('./base');

/**
 * @exports
 * @extends Error
 */
class Forbidden extends BaseResponse {
  /**
     * @constructor
     * @param {string} message
     * @param {object|null} details
     */
  constructor(message = '', details = null) {
    super();
    this.status = this.httpCodes.FORBIDDEN;
    this.message = message;
    this.details = details;
    this.name = 'E_FORBIDDEN';
  }

  get body() {
    return {
      message: this.message,
      details: this.details,
      name: this.name,
    };
  }
}

module.exports = Forbidden;
