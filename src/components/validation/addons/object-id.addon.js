const { Types } = require('mongoose');

module.exports = (Joi) => {
  /**
     * @static
     * @type {string}
     * @memberof JoiSchema
     */
  const messageObjectId = 'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters';
  return Joi.extend({
    type: 'objectId',
    messages: {
      'objectId.base': messageObjectId,
    },
    validate(value, helpers) {
      if (!Types.ObjectId.isValid(value)) {
        return {
          value,
          errors: helpers.error('objectId.base'),
        };
      }
      return {
        value,
      };
    },
  });
};
