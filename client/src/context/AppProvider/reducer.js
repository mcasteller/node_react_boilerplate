import { constants } from './actions';

const reducer = ( state, action ) => {
  switch( action.type ) {
  case constants.GET_MESSAGE_SUCCESS:
    return { ...state, message: action.payload }
  case constants.GET_USER_PROFILE_SUCCESS:
    return { ...state, user: action.user, error: null }
  case constants.GET_USER_PROFILE_FAILURE:
    return { ...state, error: action.errorMessage }
  case constants.LOGOUT_SUCCESS:
    return { ...state, user: {} }
  case constants.LOGOUT_FAILURE:
    return { ...state, user: {}, error: action.errorMessage }
  default:
    throw new Error();
  }
}

export default reducer;
