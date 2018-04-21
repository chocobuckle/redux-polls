/* eslint-disable no-shadow */
import { ADD_POLL, ADD_ANSWER } from './polls';

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
    case ADD_ANSWER: {
      const user = state[action.authedUser]
      return {
        ...state,
        [action.authedUser]: {
          ...user,
          answers: user.answers.concat([action.id])
        }
      }
    }
    default:
      return state;
  }
}
