import React, { useContext } from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = ( response ) => {
  console.log( response );
}

export default function LoginButton () {
  const user = 'mariano';

  return user ? (
    <a>Logout</a>
  ) : (
    <GoogleLogin
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )

}
