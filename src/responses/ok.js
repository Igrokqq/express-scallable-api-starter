const BaseResponse = require('./base');
/**
 * @exports
 * @extends Error
 */
class Ok extends BaseResponse {
  /**
     * @constructor
     * @param {object|null} data
     */
  constructor(data = null) {
    super();
    this.status = this.httpCodes.OK;
    this.data = data;
  }

  get body() {
    return {
      data: this.data,
    };
  }
}

module.exports = Ok;
