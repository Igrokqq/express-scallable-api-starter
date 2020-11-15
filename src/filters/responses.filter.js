const HttpCodes = require('../config/constants/http-codes');

const UnauthorizedResponse = require('../responses/unauthorized.response');
const NotFoundResponse = require('../responses/not-found.response');
const ForbiddenResponse = require('../responses/forbidden.response');
const ConflictResponse = require('../responses/conflict.response');
const ValidationFailedResponse = require('../responses/validation-failed.response');

module.exports = (targetMethod) => async (req, res, next) => {
  try {
    const response = await targetMethod(req);
    const responseBody = response.body;

    if (response instanceof UnauthorizedResponse) {
      res.status(HttpCodes.UNAUTHORIZED).json(responseBody);
      return;
    }

    if (response instanceof ForbiddenResponse) {
      res.status(HttpCodes.FORBIDDEN).json(responseBody);
      return;
    }

    if (response instanceof ValidationFailedResponse) {
      res.status(HttpCodes.VALIDATION_FAILED).json(responseBody);
      return;
    }

    if (response instanceof NotFoundResponse) {
      res.sendStatus(HttpCodes.NOT_FOUND);
      return;
    }

    if (response instanceof ConflictResponse) {
      res.status(HttpCodes.CONFLICT).json(responseBody);
      return;
    }

    res.status(response.status).json(responseBody);
  } catch (error) {
    res.sendStatus(HttpCodes.SERVER_ERROR);
    next(error);
  }
};
