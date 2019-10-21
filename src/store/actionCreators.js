import {getPosts, getComments, getUsers} from '../api/api';

export const SET_POSTS = 'SET_POSTS';
export const SET_COMMENTS = 'SET_COMMENTS';
export const SET_USERS = 'SET_USERS';

const setPosts = value => ({ type: SET_POSTS, value });
const setComments = value => ({ type: SET_COMMENTS, value });
const setUsers = value => ({ type: SET_USERS, value });

export const getPostsThunkCreator = () => async (dispatch) => {
  const posts = await getPosts();
  setTimeout(() => {
    dispatch(setPosts(posts));
  }, 1000)
};

export const getCommentsThunkCreator = () => async (dispatch) => {
  const comments = await getComments();
  setTimeout(() => {
    dispatch(setComments(comments));
  }, 4000)
};

export const getUsersThunkCreator = () => async (dispatch) => {
  const users = await getUsers();
  setTimeout(() => {
    dispatch(setUsers(users));
  }, 2000)
};
