import {SET_USERS, SET_USERS_ISLOADING} from '../actionCreators';

const initialState = {
  users: [],
  usersIsLoading: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return ({
        ...state,
        users: action.value,
      });
    
    case SET_USERS_ISLOADING:
      return ({
        ...state,
        usersIsLoading: action.value,
      });

    default:
      return state
  }
};
