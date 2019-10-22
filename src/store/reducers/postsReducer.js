import {SET_POSTS} from '../actionCreators';

const initialState = {
  posts: [],
  postsIsLoaded: false,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return ({
        ...state,
        posts: action.value,
        postsIsLoaded: true,
      });

    default:
      return state;
  }
};
