const Joi = require('joi');
const addons = require('./addons');

const extendJoi = (addons) => {
  let customJoi = Joi;

  addons.forEach((addon) => {
    customJoi = addon(customJoi);
  });

  return customJoi;
};

const customJoi = extendJoi(addons);

module.exports = customJoi;
