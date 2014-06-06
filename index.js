var ghost = require('ghost/core'),
    config = require('./config.js'),
    express = require('ghost/node_modules/express'),
    customRedirects = require('custom-redirects'),
    redirects = require('./redirects.js');

app = express();
app.use(customRedirects(redirects));

config.app = app;

ghost(config);
