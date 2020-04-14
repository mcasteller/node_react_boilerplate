const express = require( 'express' );
const createError = require( 'http-errors' );
const path = require( 'path' );
const cookieParser = require( 'cookie-parser' );
const logger = require ( 'morgan' );

const indexRouter = require( '../modules/core/core.routes' );
const usersRouter = require( '../modules/users/users.routes' );

/**
 * Initialize application middleware
 */
module.exports.initMiddleware = function ( app ) {
  app.use( logger( 'dev' ) );
  app.use( express.json() );
  app.use( express.urlencoded( { extended: false } ) );
  app.use( cookieParser() );
  app.use( express.static( path.join( __dirname, 'public' ) ) );
}

/**
 * Configure view engine
 */
module.exports.initViewEngine = function ( app ) {
  app.set( 'views', path.join( __dirname, 'views' ) );
  app.set( 'view engine', 'jade' );
}

/**
 * Configure the application routes
 */
module.exports.initRoutes = function ( app ) {
  indexRouter( app );
  usersRouter( app );
}

/**
 * Configure error handling
 */
module.exports.initErrorRoutes = function ( app ) {
  // catch 404 and forward to error handler
  app.use( function ( req, res, next ) {
    next( createError( 404 ) );
  } );

  // error handler
  app.use( function ( err, req, res, next ) {
  // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get( 'env' ) === 'development' ? err : {};

    // render the error page
    res.status( err.status || 500 );
    res.render( 'error' );
  } );
}

/**
 * Initialize the Express application
 */
module.exports.init = function () {

  // Initialize express app
  const app = express();

  // Initialize Express middleware
  this.initMiddleware( app );

  // Initialize Express view engine
  this.initViewEngine( app );

  // Initialize modules server routes
  this.initRoutes( app );

  // Initialize error routes
  this.initErrorRoutes( app );

  return app;
}
