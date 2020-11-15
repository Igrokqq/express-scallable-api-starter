const customJoi = require('../../validation');

module.exports = (input) => customJoi
  .object({
    id: customJoi.objectId(),
    fullName: customJoi
      .string()
      .min(1)
      .max(30)
      .required(),
  })
  .validate(input);
