/* eslint-disable no-shadow */
const SET_AUTHED_USER = 'SET_AUTHED_USER';

export const setAuthedUser = (id) => ({
  type: SET_AUTHED_USER,
  id
});

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
}
