const express = require('express');

const UserRouter = require('../components/User/router');

module.exports = {
  /**
   * @function
   * @param {express.Application} app
   * @summary init Application router
   * @returns void
   */
  init(app) {
    const router = express.Router();

    /**
     * Forwards any requests to the /v1/users URI to UserRouter.
     * @name /v1/users
     * @function
     * @inner
     * @param {string} path - Express path
     * @param {callback} middleware - Express middleware.
     */
    app.use('/v1/users', UserRouter);

    /**
     * @function
     * @inner
     * @param {express.Router}
     */
    app.use(router);
  },
};
