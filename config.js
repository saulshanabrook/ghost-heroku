// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://docs.ghost.org/usage/configuration/


var config = {
    production: {
        url: process.env.web_url,
        mail: {},
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
        }
    },
};

// Export config
module.exports = config;
