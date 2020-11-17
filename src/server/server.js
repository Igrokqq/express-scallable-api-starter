const http = require('http');

const { join } = require('path');
require('dotenv').config({
  path: join(`${__dirname}/../../.env`),
});
const middleware = require('../config/middleware');
const pipeline = require('../config/pipeline');

const events = require('./events');

module.exports = {
  init: (app) => {
    middleware(app);
    pipeline(app);

    const port = process.env.PORT || 3000;
    const server = http.createServer(app).listen(port, () => {
      console.log(`Server is listening on ${port} port`);
    });

    return events.bind(server, port);
  },
};
