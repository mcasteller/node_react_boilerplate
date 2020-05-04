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
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={logout}
      onFailure={logoutFailure}
    />
  ) : (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Login"
      cookiePolicy={'single_host_origin'}
      uxMode='redirect'
      redirectUri={process.env.REACT_APP_GOOGLE_REDIRECT_URL}
      state={window.location.pathname}
    />
  )
}
