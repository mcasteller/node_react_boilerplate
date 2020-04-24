
export function getMessage () {
  return fetch( '/users', { method: 'GET' } )
    .then( response => response.json() )
    .catch( ( e ) => console.log( "Error", e ) );
}
