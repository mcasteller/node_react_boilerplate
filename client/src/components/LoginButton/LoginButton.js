import React, { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import { Context } from '../../context/HeaderProvider/store';

export default function LoginButton () {

  const [ state, actions ] = useContext( Context );

  const successResponseGoogle = ( response ) => {
    // const { tokenId } = response;

    actions.login( {
      response
    } )
  }

  const failureResponseGoogle = ( response ) => {
    console.log( response );
  }
  const user = 'mariano';

  return user ? (
    // <a href="http://localhost:3100/users/auth/google">Che dale al login</a>
    <GoogleLogin
      clientId="261404288404-556hbrioma1usbcphns9ktm1lgpppq2f.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={successResponseGoogle}
      onFailure={failureResponseGoogle}
      cookiePolicy={'single_host_origin'}
      uxMode='redirect'
      redirectUri={'http://localhost:3100/users/auth/google/callback'}
    />
  ) : (
    <a>Logout</a>
  )

}
