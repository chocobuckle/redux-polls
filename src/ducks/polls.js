/* eslint-disable no-shadow */
import { showLoading, hideLoading } from 'react-redux-loading';
import { savePoll } from '../utils/api';

const FETCH_POLLS_SUCCESS = 'FETCH_POLLS_SUCCESS';
export const ADD_POLL = 'ADD_POLL';

export const fetchPollsSuccess = (polls) => ({
  type: FETCH_POLLS_SUCCESS,
  polls
});

const addPoll = (poll) => ({
  type: ADD_POLL,
  poll
});

export const handleAddPoll = (poll) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return savePoll({
      ...poll,
      author: authedUser
    })
      .then((poll) => dispatch(addPoll(poll)))
      .then(() => dispatch(hideLoading()));
  };
};

export default function polls(state = {}, action) {
  switch (action.type) {
    case FETCH_POLLS_SUCCESS:
      return {
        ...state,
        ...action.polls
      };
    case ADD_POLL:
      return {
        ...state,
        [action.poll.id]: action.poll
      };
    default:
      return state;
  }
}
