const express = require( 'express' );

/**
 * Initialize the Express application
 */
const app = express();

require( './logger' )( app );
require( './middleware' )( app );
require( './views' )( app );
require( './routes' )( app );
require( './error-routes.js' )( app );

module.exports = app;
