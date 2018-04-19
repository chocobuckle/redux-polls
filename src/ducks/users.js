/* eslint-disable no-shadow */
import { ADD_POLL } from './polls';
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
    case ADD_POLL: {
      const { poll } = action;
      const { author, id } = poll;
      return {
        ...state,
        [author]: {
          ...state[author],
          polls: state[author].polls.concat([id])
        }
      };
    }
    default:
      return state;
  }
}
