const { Router } = require( 'express' );
const router = Router();

module.exports = ( app ) => {
  app.use( '/users', router );

  /* GET users listing. */
  router.get( '/', function ( req, res, next ) {
    console.log( 'heilaa' )
    res.send( 'respond with a resource' );
  } );
}
