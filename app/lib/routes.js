
const indexRouter = require( '../modules/core/core.routes' );
const usersRouter = require( '../modules/users/users.routes' );

/**
 * Initialize application routes
 */
module.exports = function ( app ) {
  indexRouter( app );
  usersRouter( app );
}
