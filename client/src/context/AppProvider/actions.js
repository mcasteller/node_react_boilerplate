import * as api from './api';

// Constants
export const constants = {
  GET_MESSAGE_SUCCESS: 'GET_MESSAGE.SUCCESS',
  GET_USER_PROFILE_SUCCESS: 'GET_USER_PROFILE_SUCCESS',
  GET_USER_PROFILE_FAILURE: 'GET_USER_PROFILE_FAILURE',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE'

};

// Actions will be responsible for retrieving data
// to be later used by reducers to update current state
export function createActions ( dispatch ) {
  return {
    getMessage: async () => {
      const payload = await api.getMessage();

      dispatch( {
        type: constants.GET_MESSAGE_SUCCESS,
        payload
      } );
    },
    getUserProfile: async () => {
      try {
        const user = await api.getUserProfile();

        localStorage.setItem( "user", JSON.stringify( user ) );

        dispatch( {
          type: constants.GET_USER_PROFILE_SUCCESS,
          user
        } );
      } catch ( e ) {
        dispatch( {
          type: constants.GET_USER_PROFILE_FAILURE,
          errorMessage: e.message || e
        } );
      }
    },
    logout: async () => {
      try {
        const response = await api.logout();

        localStorage.removeItem( "user" );

        dispatch( {
          type: constants.LOGOUT_SUCCESS,
          message: response.message
        } );
      } catch ( e ) {
        dispatch( {
          type: constants.LOGOUT_FAILURE,
          errorMessage: e.message || e
        } );
      }
    }
  }
}
