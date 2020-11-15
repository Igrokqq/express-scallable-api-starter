const BaseResponse = require('./base.response');

/**
 * @exports
 * @extends Error
 */
class ValidationFailedResponse extends BaseResponse {
  /**
     * @constructor
     * @param {string} message
     * @param {object|null} details
     */
  constructor(message = '', details = null) {
    super();
    this.status = this.httpCodes.VALIDATION_FAILED;
    this.message = message;
    this.details = details;
    this.name = 'E_VALIDATION_FAILED';
  }

  get body() {
    return {
      message: this.message,
      details: this.details,
      name: this.name,
    };
  }
}

module.exports = ValidationFailedResponse;
