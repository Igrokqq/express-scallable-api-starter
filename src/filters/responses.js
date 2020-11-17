const HttpCodes = require('../config/constants/http-codes');

module.exports = async function (targetMethodResponsePromise) {
  try {
    const response = await targetMethodResponsePromise;
    const responseBody = response.body;

    if (response instanceof this.UnauthorizedResponse) {
      this.res.status(HttpCodes.UNAUTHORIZED).json(responseBody);
      return;
    }

    if (response instanceof this.ForbiddenResponse) {
      this.res.status(HttpCodes.FORBIDDEN).json(responseBody);
      return;
    }

    if (response instanceof this.ValidationFailedResponse) {
      this.res.status(HttpCodes.VALIDATION_FAILED).json(responseBody);
      return;
    }

    if (response instanceof this.NotFoundResponse) {
      this.res.sendStatus(HttpCodes.NOT_FOUND);
      return;
    }

    if (response instanceof this.ConflictResponse) {
      this.res.status(HttpCodes.CONFLICT).json(responseBody);
      return;
    }

    this.res.status(response.status).json(responseBody);
  } catch (error) {
    const errorBody = new this.ServerErrorResponse(error.message).body;

    this.res.status(HttpCodes.OK).json(errorBody);
    this.next(error);
  }
};
