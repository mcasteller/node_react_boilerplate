const passportGoogle = require ( 'passport-google-oauth' );
const mongoose = require( 'mongoose' );
const _ = require ( 'lodash' );
const Container = require( "typedi" ).Container;

const GoogleStrategy = passportGoogle.OAuth2Strategy

const strategy = () => {

  const strategyOptions = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${ process.env.SERVER_API_URL }/users/auth/google/callback`,
    passReqToCallback: true
  }

  const verifyCallback = async (
    request,
    accessToken,
    refreshToken,
    profile,
    done
  ) => {
    const logger  = Container.get( "logger" );

    const User = mongoose.model( 'User' );

    const username = profile.displayName.replace( / /g, '' );

    User.findOne( { username }, function ( err, user ) {
      if ( err ) {
        logger.error( 'Google Strategy - Error:', err );

        return done( err, false );
      }
      if ( user ) {
        return done( null, user );
      } else {
        // Create a new account
        User
          .create( {
            provider: profile.provider,
            username: profile.displayName.replace( / /g, '' ),
            email: profile.emails.length ? _.first( profile.emails ).value : '',
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName
          }, ( err, user ) => {
            logger.info( "Google Strategy: Validation getting called" )

            return done( err, user )
          } )
      }
    } );

  }

  return new GoogleStrategy( strategyOptions, verifyCallback );
}

module.exports = strategy();
