import {getPosts, getComments, getUsers, getFilteredPosts} from '../api/api';

export const SET_POSTS = 'SET_POSTS';
export const SET_COMMENTS = 'SET_COMMENTS';
export const SET_USERS = 'SET_USERS';

const setPosts = value => ({ type: SET_POSTS, value });
const setComments = value => ({ type: SET_COMMENTS, value });
const setUsers = value => ({ type: SET_USERS, value });

export const getPostsThunkCreator = isLoadingCB => dispatch => {
  isLoadingCB(false);

  getPosts()
    .then(posts => setTimeout(() => {
        isLoadingCB(true)
        dispatch(setPosts(posts))
      }, 1000))
    .catch(() => dispatch(setPosts([])));
};

export const getfilteredPostsThunkCreator = (searchvalue, isLoadingCB) =>
  dispatch => {
    isLoadingCB(false);

    getFilteredPosts(searchvalue)
      .then(filteredPosts => setTimeout(() => {
          isLoadingCB(true)
          dispatch(setPosts(filteredPosts))
        }, 300))
      .catch(() => dispatch(setPosts([])));
};

export const getCommentsThunkCreator = isLoadingCB => dispatch => {
  isLoadingCB(false);

  getComments()
    .then(comments => setTimeout(() => {
        isLoadingCB(true)
        dispatch(setComments(comments))
      }, 3000))
    .catch(() => []);
};

export const getUsersThunkCreator = isLoadingCB => dispatch => {
  isLoadingCB(false);

  getUsers()
    .then(users => setTimeout(() => {
        isLoadingCB(true)
        dispatch(setUsers(users))
      }, 2000))
    .catch(() => []);
};
