/* eslint-disable no-shadow */
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

const initialState = {};

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  users
});

export default function users(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        ...action.users
      };
    default:
      return state;
  }
}
