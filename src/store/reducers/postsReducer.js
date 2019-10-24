import {SET_POSTS, SET_POSTS_ISLOADING} from '../actionCreators';

const initialState = {
  posts: [],
  postsIsLoading: false,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return ({
        ...state,
        posts: action.value,
      });

    case SET_POSTS_ISLOADING:
      return ({
        ...state,
        postsIsLoading: action.value,
      });

    default:
      return state;
  }
};
