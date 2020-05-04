const { Router } = require( 'express' );
const router = Router();
const Container = require( "typedi" ).Container;
const passport = require ( 'passport' );
const controller = require( './users.controller' );

module.exports = ( app ) => {
  const logger = Container.get( "logger" );

  app.use( '/api/users', router );

  router.get( '/auth/google/callback',
    passport.authenticate( 'google', { scope: [ 'profile', 'email' ] } ),
    controller.authenticate );

  // This url will only open, if the user is signed in
  router.get( '/profile',
    passport.authenticate( 'jwt', { session: false } ),
    controller.getUser );

  router.get( '/logout',
    passport.authenticate( 'jwt', { session: false } ),
    controller.logout );

}
