import { getInitialData } from 'utils/api';
import { fetchUsersSuccess } from 'ducks/users';
import { fetchPollsSuccess } from 'ducks/polls';

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

const fetchInitialDataSuccess = (data) => {
  console.log(data);
  return {
    type: FETCH_INITAL_DATA_SUCCESS
  }
};

export function handleInitialData() {
  return (dispatch) => {
    dispatch(fetchInitialData());
    getInitialData()
      .then(({ users, polls }) => {
        Promise.all([
          dispatch(fetchUsersSuccess(users)),
          dispatch(fetchPollsSuccess(polls))
        ])
        .then(dispatch(fetchInitialDataSuccess()));
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
        error: ''
      };
    default:
      return state;
  }
}
