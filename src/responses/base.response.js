const HttpCodes = require('../config/constants/http-codes');

class BaseResponse {
  constructor() {
    this._httpCodes = HttpCodes;
  }

  get httpCodes() {
    return this._httpCodes;
  }
}

module.exports = BaseResponse;
