const async = require( 'async' );
const logger = require( './logger' );
const mongoose = require( './mongoose' );
const middleware = require( './middleware' );
const session = require( './session' );
const routes = require( './routes' );
const security = require( './security' );
const errorRoutes = require( './error-routes.js' );
const models = require( '../modules/models' );
const Container = require( "typedi" ).Container;

/**
 * Initialize the Express application
 */

module.exports.initialize = ( app ) => {

  console.log( 'Start app init' )
  async.series( [
    initLogger,
    initDatabase,
    initMiddleware,
    initSession,
    initSecurity,
    initRoutes,
    initErrorRoutes
  ], ( err, res ) => {
    if ( err ) {
      return console.log( 'Error on app startup', err )
    }

    return app;
  } );

  async function initLogger () {
    logger.initialize( app )
  }

  async function initDatabase () {
    const logger  = Container.get( "logger" );

    return mongoose.connect()
      .then( function ( connection ) {
      // Enabling mongoose debug mode if required
      // mongoose.set( 'debug', config.db.debug );
        logger.info( 'Mongo: connected' );

        return models.load();
      // Call callback FN
      // if ( callback ) callback( connection.db );
      } )
      .catch( function ( err ) {
        logger.error( 'Could not connect to MongoDB!' );
      } )
  }

  async function initMiddleware () {
    middleware.initialize( app );
  }

  async function initSession () {
    session.initialize( app );
  }

  async function initSecurity () {
    security.initialize( app );
  }

  async function initRoutes () {
    routes.initialize( app )
  }

  async function initErrorRoutes () {
    errorRoutes.initialize( app );
  }
}
