import * as api from './api';

// Constants
export const constants = {
  GET_MESSAGE_SUCCESS: 'GET_MESSAGE.SUCCESS'
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
    down: () => dispatch( { type: 'down' } ),
    reset: () => dispatch( { type: 'reset' } )
  };
}
