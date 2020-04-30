const Container = require( "typedi" ).Container;

module.exports.load = _ => {
  const logger  = Container.get( "logger" );
  logger.info( "Models: start loading models" );

  return {
    User: require( './users/users.model' )
  };
};

