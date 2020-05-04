import React, { useContext } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { Context } from '../../context/AppProvider/store';

export default function LoginButton () {

  const [ state, actions ] = useContext( Context );

  const logout = ( response ) => {
    actions.logout();
  }

  const logoutFailure = ( response ) => {
    console.log( response );
  }
  const user = state.user;

  return user ? (
    <GoogleLogout
      clientId="261404288404-556hbrioma1usbcphns9ktm1lgpppq2f.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
      onFailure={logoutFailure}
    />
  ) : (
    <GoogleLogin
      clientId="261404288404-556hbrioma1usbcphns9ktm1lgpppq2f.apps.googleusercontent.com"
      buttonText="Login"
      cookiePolicy={'single_host_origin'}
      uxMode='redirect'
      redirectUri={'http://localhost:3100/api/users/auth/google/callback'}
      state={window.location.pathname}
    />
  )
}
