const { Router } = require( 'express' );
const router = Router();

module.exports = ( app ) => {
  app.use( '/', router );

  /* GET home page. */
  router.get( '/', function ( req, res, next ) {
    console.log( 'heilaa index' )
    res.render( 'index', { title: 'Express' } );
  } );

}
