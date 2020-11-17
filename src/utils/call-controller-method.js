const handler = async function (targetMethod) {
  const handler = targetMethod.fn;
  const inputs = {
    body: this.req.body,
    params: this.req.params,
    query: this.req.query,
  };
  const self = targetMethod.constants ? {
    ...this,
    ...targetMethod.constants,
  } : this;

  if (targetMethod.dto) {
    const { error } = await targetMethod.dto(inputs);

    if (error) {
      return new this.ValidationFailedResponse(error.details);
    }
  }

  const handlerResponse = await handler.call(self, inputs);

  return handlerResponse;
};

module.exports = (context, targetMethod) => handler.call(context, targetMethod);
