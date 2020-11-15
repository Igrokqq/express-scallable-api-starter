const BaseResponse = require('./base.response');
/**
 * @exports
 * @extends Error
 */
class CreatedResponse extends BaseResponse {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.status = this.httpCodes.CREATED;
  }
}

module.exports = CreatedResponse;
