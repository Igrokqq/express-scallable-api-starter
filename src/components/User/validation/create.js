const customJoi = require('../../validation');

module.exports = (input) => customJoi
  .object({
    email: customJoi.string().email(),
    fullName: customJoi
      .string()
      .min(1)
      .max(30)
      .required(),
  })
  .validate(input);
