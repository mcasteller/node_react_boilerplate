const express = require( './express' );

if ( process.env.NODE_ENV !== 'production' ) {
  require( 'dotenv' ).config();
}

app = express.init();

module.exports = app;
