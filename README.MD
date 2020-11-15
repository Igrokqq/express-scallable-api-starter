# Express-scallable-api-starter

> Node.js Express.js API. Supports MongoDB

## Description
This starter will help you to build your scallable api what is easy to support

### Project Introduction
- Support ES6/ES7 features
- Using Eslint followed [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Husky
- Commitizen
- MIT license and Code of conduct

## Requirements

- node >= 14
- npm >= 6

``` 
|-- README.MD
|-- nodemon.json
|-- package-lock.json
|-- package.json
`-- src
    |-- components
    |   |-- User
    |   |   |-- controller
    |   |   |   |-- create.js
    |   |   |   |-- delete-by-id.js
    |   |   |   |-- get-all.js
    |   |   |   |-- get-by-id.js
    |   |   |   |-- index.js
    |   |   |   `-- update-by-id.js
    |   |   |-- model.js
    |   |   |-- repository
    |   |   |   |-- check-if-exist.js
    |   |   |   |-- create.js
    |   |   |   |-- delete-by-id.js
    |   |   |   |-- get-all.js
    |   |   |   |-- get-by-id.js
    |   |   |   |-- index.js
    |   |   |   `-- update-by-id.js
    |   |   |-- router.js
    |   |   |-- service
    |   |   |   |-- check-if-exist.js
    |   |   |   |-- create.js
    |   |   |   |-- delete-by-id.js
    |   |   |   |-- get-all.js
    |   |   |   |-- get-by-id.js
    |   |   |   |-- index.js
    |   |   |   `-- update-by-id.js
    |   |   `-- validation
    |   |       |-- create.js
    |   |       |-- delete-by-id.js
    |   |       |-- get-by-id.js
    |   |       |-- index.js
    |   |       `-- update-by-id.js
    |   `-- validation
    |       |-- addons
    |       |   |-- index.js
    |       |   `-- object-id.addon.js
    |       `-- index.js
    |-- config
    |   |-- constants
    |   |   `-- http-codes.js
    |   |-- middleware.js
    |   `-- router.js
    |-- db
    |   `-- mongo-connection.js
    |-- filters
    |   `-- responses.filter.js
    |-- responses
    |   |-- base.response.js
    |   |-- conflict.response.js
    |   |-- created.response.js
    |   |-- forbidden.response.js
    |   |-- not-found.response.js
    |   |-- ok.response.js
    |   |-- unauthorized.response.js
    |   `-- validation-failed.response.js
    |-- server
    |   |-- events.js
    |   |-- index.js
    |   `-- server.js
    `-- utils
        `-- bind-route-handler.js

```

## Running the API
### Development
To start the application in development mode, run:

```bash
nodemon
```

### Production
To start the application in production mode, run:

```bash
npm start
```
