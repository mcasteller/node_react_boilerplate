const { Router } = require( 'express' );
const router = Router();
const logger = require( 'winston' );
// this retrieves default logger which was configured in log.js

module.exports = ( app ) => {
  app.use( '/', router );

  /* GET home page. */
  router.get( '/', function ( req, res, next ) {
    logger.info( 'heilaa index logger' );
    console.log( 'heilaa index' )
    res.render( 'index', { title: 'Express' } );
  } );

}
