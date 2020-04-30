'use strict';

/**
 * Module dependencies.
 */
const _ = require( 'lodash' ),
  config = require( '../config/config' ),
  mongoose = require( 'mongoose' );

// Initialize Mongoose
module.exports.connect = function () {
  // mongoose.Promise = config.db.promise;

  const options = _.merge( config.db.options || {} );

  return mongoose
    .connect( 'mongodb://mongo:27017/expressmongo', options )

  // .connect( config.db.uri, options )

};

// module.exports.disconnect = function ( cb ) {
//   mongoose.connection.db
//     .close( function ( err ) {
//       logger.info( 'Disconnected from MongoDB.' );
//       return cb( err );
//     } );
// };
