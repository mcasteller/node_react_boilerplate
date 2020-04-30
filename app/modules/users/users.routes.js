const { Router } = require( 'express' );
const router = Router();
const Container = require( "typedi" ).Container;
const passport = require ( 'passport' );
const jwt = require( 'jsonwebtoken' )

module.exports = ( app ) => {
  const logger = Container.get( "logger" );

  app.use( '/users', router );

  /* GET users listing. */
  router.get( '/', function ( req, res, next ) {
    logger.info( 'User Route executed' );
    res.json( 'respond with a resources - marianoooooooo' );
  } );

  // This url will only open, if the user is signed in
  router.get( '/dashboard', passport.authenticate( 'jwt', { session: false } ),
    ( req, res )=>{
      res.send( `Wellcome user ${ req.user.email }` )
    } )

  router.get( '/auth/google/callback',
    passport.authenticate( 'google', { scope: [ 'profile', 'email' ] } ),
    function ( req, res ) {
      logger.info( 'User Route: authentication successfull' );

      const user = {
        name: req.user.username,
        email: req.user.email,
        displayName: req.user.displayName,
        provider: req.user.provider }
      console.log( user )

      // TODO: retrieve secret from config file
      const token = jwt.sign( {
        data: user
      }, 'secret' );
      res.cookie( 'jwt', token )
      res.redirect( '/' )
    } );

}
