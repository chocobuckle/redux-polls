/* eslint-disable no-shadow */
import { showLoading, hideLoading } from 'react-redux-loading';
import { savePoll, savePollAnswer } from '../utils/api';

const FETCH_POLLS_SUCCESS = 'FETCH_POLLS_SUCCESS';
export const ADD_POLL = 'ADD_POLL';
export const ADD_ANSWER = 'ADD_ANSWER';

function addAnswer({ authedUser, id, answer }) {
  return {
    type: ADD_ANSWER,
    authedUser,
    id,
    answer
  };
}

export function handleAddAnswer(answerData) {
  return (dispatch) => {
    dispatch(showLoading());
    return savePollAnswer(answerData)
      .then(() => dispatch(addAnswer(answerData)))
      .then(() => dispatch(hideLoading()));
  };
}

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
    case ADD_ANSWER: {
      const { answer, id, authedUser } = action;
      const poll = state[id];
      const votesKey = `${answer}Votes`;
      return {
        ...state,
        [action.id]: {
          ...poll,
          [votesKey]: poll[votesKey].concat([authedUser])
        }
      };
    }
    default:
      return state;
  }
}
