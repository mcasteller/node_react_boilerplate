const express = require( 'express' );
const cookieParser = require( 'cookie-parser' );
const path = require( 'path' );

/**
 * Initialize application middleware
 */
module.exports.initialize = function ( app ) {
  app.use( express.json() );
  app.use( express.urlencoded( { extended: false } ) );
  app.use( cookieParser() );
  app.use( express.static( path.join( __dirname, '../public' ) ) );
}
