/* eslint-disable no-shadow */
const SHOW_ANSWERED_POLLS = 'SHOW_ANSWERED_POLLS';
const SHOW_UNANSWERED_POLLS = 'SHOW_UNANSWERED_POLLS';

const initialState = {
  showUnansweredPolls: true,
  showAnsweredPolls: false
};

export const showAnsweredPolls = () => ({
  type: SHOW_ANSWERED_POLLS
})

export const showUnansweredPolls = () => ({
  type: SHOW_UNANSWERED_POLLS
})

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case SHOW_ANSWERED_POLLS:
      return {
        ...state,
        showUnansweredPolls: false,
        showAnsweredPolls: true
      }
    case SHOW_UNANSWERED_POLLS:
      return {
        ...state,
        showUnansweredPolls: true,
        showAnsweredPolls: false
      }
    default:
      return state;
  }
}
