import {SET_USERS} from '../actionCreators';

const initialState = {
  users: [],
  usersIsLoaded: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return ({
        ...state,
        users: action.value,
        usersIsLoaded: true,
      });

    default:
      return state
  }
};
