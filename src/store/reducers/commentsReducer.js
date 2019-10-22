import {SET_COMMENTS} from '../actionCreators';

const initialState = {
  comments: [],
  commentsIsLoaded: false,
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return ({
        ...state,
        comments: action.value,
        commentsIsLoaded: true,
      });

    default:
      return state
  }
};
