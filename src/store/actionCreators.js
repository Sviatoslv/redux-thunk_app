import {getPosts, getComments, getUsers, getFilteredPosts} from '../api/api';

export const SET_POSTS = 'SET_POSTS';
export const SET_COMMENTS = 'SET_COMMENTS';
export const SET_USERS = 'SET_USERS';

const setPosts = value => ({ type: SET_POSTS, value });
const setComments = value => ({ type: SET_COMMENTS, value });
const setUsers = value => ({ type: SET_USERS, value });

export const getPostsThunkCreator = () => (dispatch) => {
  getPosts()
    .then(posts => setTimeout(() => {
        dispatch(setPosts(posts))
      }, 1000))
    .catch(() => dispatch(setPosts([])));
};

export const getfilteredPostsThunkCreator = (searchvalue) => (dispatch) => {
  getFilteredPosts(searchvalue)
    .then(filteredPosts => setTimeout(() => {
        dispatch(setPosts(filteredPosts))
      }, 300))
    .catch(() => dispatch(setPosts([])));
};

export const getCommentsThunkCreator = () => (dispatch) => {
  getComments()
    .then(comments => setTimeout(() => {
        dispatch(setComments(comments))
      }, 3000))
    .catch(() => []);
};

export const getUsersThunkCreator = () => (dispatch) => {
  getUsers()
    .then(users => setTimeout(() => {
        dispatch(setUsers(users))
      }, 2000))
    .catch(() => []);
};
