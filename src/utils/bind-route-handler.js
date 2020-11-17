const responsesFilter = require('../filters/responses');
const buildResponsesInContext = require('./build-responses-in-context');
const callControllerMethod = require('./call-controller-method');

module.exports = (targetMethod) => async function (req, res, next) {
  const context = buildResponsesInContext({ req, res, next });

  await responsesFilter.call(context, callControllerMethod(context, targetMethod));
};
