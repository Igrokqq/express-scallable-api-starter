const express = require('express');
const server = require('./server');

const app = express();

server.init(app);
