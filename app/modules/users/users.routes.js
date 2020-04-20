const { Router } = require( 'express' );
const router = Router();
const { logger } = require( '../../lib/logger' );

module.exports = ( app ) => {
  app.use( '/users', router );

  /* GET users listing. */
  router.get( '/', function ( req, res, next ) {
    logger.info( 'User Route executed' );
    res.send( 'respond with a resources - marianoooooooo' );
  } );
}
