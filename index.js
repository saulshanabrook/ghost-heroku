var ghost = require('ghost/core'),
    config = require('./config.js'),
    express = require('ghost/node_modules/express');

app = express();

config.app = express();

ghost(config);
