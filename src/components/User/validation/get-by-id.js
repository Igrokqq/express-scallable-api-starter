const customJoi = require('../../validation');

module.exports = (input) => customJoi
  .object({
    id: customJoi.objectId(),
  })
  .validate(input);
