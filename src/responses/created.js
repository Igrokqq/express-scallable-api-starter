const BaseResponse = require('./base');
/**
 * @exports
 * @extends Error
 */
class Created extends BaseResponse {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.status = this.httpCodes.CREATED;
  }
}

module.exports = Created;
