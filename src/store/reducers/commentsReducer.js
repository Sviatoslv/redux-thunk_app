import {SET_COMMENTS, SET_COMMENTS_ISLOADING} from '../actionCreators';

const initialState = {
  comments: [],
  commentsIsLoading: false,
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return ({
        ...state,
        comments: action.value,
      });

    case SET_COMMENTS_ISLOADING:
      return ({
        ...state,
        commentsIsLoading: action.value,
      });

    default:
      return state
  }
};
