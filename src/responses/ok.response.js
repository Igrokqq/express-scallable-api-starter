const BaseResponse = require('./base.response');
/**
 * @exports
 * @extends Error
 */
class OkResponse extends BaseResponse {
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

module.exports = OkResponse;
