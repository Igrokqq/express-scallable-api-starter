const responsesFilter = require('../filters/responses.filter');
const ValidationFailedResponse = require('../responses/validation-failed.response');

module.exports = (targetMethod) => (req, res, next) => {
  const handler = targetMethod.fn;

  responsesFilter(async (req) => {
    const inputs = {
      ...req.body,
      ...req.params,
    };

    if (targetMethod.dto) {
      const { error } = await targetMethod.dto(inputs);

      if (error) {
        return new ValidationFailedResponse(error.details);
      }
    }

    const handlerResponse = await handler(inputs);

    return handlerResponse;
  }).call(null, req, res, next);
};
