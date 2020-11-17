const express = require('express');
const bindRouteHandler = require('../utils/bind-route-handler');

const UserController = require('../components/User/controller');

module.exports = (app) => {
  const router = express.Router();

  // USERS
  const users = express.Router();
  users.get('/', bindRouteHandler(UserController.getAll));
  users.get('/:id', bindRouteHandler(UserController.getById));
  users.post('/', bindRouteHandler(UserController.create));
  users.put('/', bindRouteHandler(UserController.updateById));
  users.delete('/', bindRouteHandler(UserController.deleteById));
  app.use('/v1/users', users);

  /**
     * @function
     * @inner
     * @param {express.Router}
     */
  app.use(router);
};
