import {getPosts, getComments, getUsers} from '../api/api';

export const SET_POSTS = 'SET_POSTS';
export const SET_COMMENTS = 'SET_COMMENTS';
export const SET_USERS = 'SET_USERS';

const setPosts = value => ({ type: SET_POSTS, value });
const setComments = value => ({ type: SET_COMMENTS, value });
const setUsers = value => ({ type: SET_USERS, value });

export const getPostsThunkCreator = () => async (dispatch) => {
  const posts = await getPosts();
  dispatch(setPosts(posts));
};

export const getCommentsThunkCreator = () => async (dispatch) => {
  const comments = await getComments();
  dispatch(setComments(comments));
};

export const getUsersThunkCreator = () => async (dispatch) => {
  const users = await getUsers();
  dispatch(setUsers(users));
};
