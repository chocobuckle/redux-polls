import { getInitialData } from 'utils/api';

const FETCH_INITAL_DATA = 'FETCH_INITAL_DATA';
const FETCH_INITAL_DATA_ERROR = 'FETCH_INITAL_DATA_ERROR';
const FETCH_INITAL_DATA_SUCCESS = 'FETCH_INITAL_DATA_SUCCESS';

const initialState = {
  isFetching: false,
  error: ''
};

const fetchInitialData = () => ({
  type: FETCH_INITAL_DATA
});

const fetchInitialDataError = (error) => ({
  type: FETCH_INITAL_DATA_ERROR,
  error
});

const fetchInitialDataSuccess = ({ users, polls }) => ({
  type: FETCH_INITAL_DATA_SUCCESS,
  users,
  polls
});

export function handleInitialData() {
  return (dispatch) => {
    dispatch(fetchInitialData());
    getInitialData()
      .then((usersAndPolls) => {
        dispatch(fetchInitialDataSuccess(usersAndPolls));
      })
      .catch((error) => dispatch(fetchInitialDataError(error)));
  };
}

export default function shared(state = initialState, action) {
  switch (action.type) {
    case FETCH_INITAL_DATA:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_INITAL_DATA_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case FETCH_INITAL_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        users: Object.assign({}, state.users, action.users),
        polls: Object.assign({}, state.polls, action.polls)
      };
    default:
      return state;
  }
}
