/* eslint-disable no-shadow */
const FETCH_POLLS_SUCCESS = 'FETCH_POLLS_SUCCESS';

export const fetchPollsSuccess = (polls) => ({
  type: FETCH_POLLS_SUCCESS,
  polls
});

export default function polls(state = {}, action) {
  switch (action.type) {
    case FETCH_POLLS_SUCCESS:
      return {
        ...state,
        ...action.polls
      };
    default:
      return state;
  }
}
