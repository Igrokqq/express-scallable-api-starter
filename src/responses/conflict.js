const BaseResponse = require('./base');

/**
 * @exports
 */
class Conflict extends BaseResponse {
  /**
     * @constructor
     * @param {string} message
     * @param {object|null} details
     */
  constructor(message = '', details = null) {
    super();
    this.status = this.httpCodes.CONFLICT;
    this.message = message;
    this.details = details;
    this.name = 'E_CONFLICT';
  }

  get body() {
    return {
      message: this.message,
      details: this.details,
      name: this.name,
    };
  }
}

module.exports = Conflict;
