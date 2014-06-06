// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://docs.ghost.org/usage/configuration/

var path = require('path'),
    express = require('ghost/node_modules/express'),
    customRedirects = require('custom-redirects'),
    redirects = require('./redirects.js'),
    config;


config = {
    production: {
        url: process.env.web_url,
        mail: {
            transport: 'SMTP',
            options: {
                service: 'Mailgun',
                auth: {
                    user: process.env.MAILGUN_SMTP_LOGIN,     // mailgun username
                    pass: process.env.MAILGUN_SMTP_PASSWORD  // mailgun password
                }
            }
        },
        database: {
            client: 'pg',
            connection: process.env.DATABASE_URL,
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '0.0.0.0',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: process.env.PORT
        },
        fileStorage: false,
        paths: {
            'availableThemes': path.join(__dirname, 'themes')
        }
    },
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        url: 'http://127.0.0.1:2368/',

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '.ghost-dev.db')
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        },
        paths: {
            'availableThemes': path.join(__dirname, 'themes')
        }
    }
};

config.app = express();
config.app.use(customRedirects(redirects));

process.env.GHOST_CONFIG = path.join(__dirname, 'config.js');

console.log(path.join(__dirname, '.ghost-dev.db'));
// Export config
module.exports = config;
