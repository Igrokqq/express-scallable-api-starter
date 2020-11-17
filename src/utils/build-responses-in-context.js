const OkResponse = require('../responses/ok');
const CreatedResponse = require('../responses/created');
const ForbiddenResponse = require('../responses/forbidden');
const NotFoundResponse = require('../responses/not-found');
const UnauthorizedResponse = require('../responses/unauthorized');
const ConflictResponse = require('../responses/conflict');
const ServerErrorResponse = require('../responses/server-error');
const ValidationFailedResponse = require('../responses/validation-failed');

module.exports = (context) => ({
  ...context,
  OkResponse,
  CreatedResponse,
  ForbiddenResponse,
  NotFoundResponse,
  UnauthorizedResponse,
  ConflictResponse,
  ValidationFailedResponse,
  ServerErrorResponse,
});
