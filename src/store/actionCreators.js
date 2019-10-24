import {getPosts, getComments, getUsers, getFilteredPosts} from '../api/api';

export const SET_POSTS = 'SET_POSTS';
export const SET_USERS = 'SET_USERS';
export const SET_COMMENTS = 'SET_COMMENTS';

export const SET_POSTS_ISLOADING = 'SET_POSTS_ISLOAING';
export const SET_USERS_ISLOADING = 'SET_USERS_ISLOAING';
export const SET_COMMENTS_ISLOADING = 'SET_COMMENTS_ISLOAING';

const setPosts = value => ({ type: SET_POSTS, value });
const setUsers = value => ({ type: SET_USERS, value });
const setComments = value => ({ type: SET_COMMENTS, value });

const setPostsIsLoading = value => ({ type: SET_POSTS_ISLOADING, value });
const setUsersIsLoading = value => ({ type: SET_USERS_ISLOADING, value });
const setCommentsIsLoading = value => ({ type: SET_COMMENTS_ISLOADING, value });

export const getPostsThunkCreator = () => dispatch => {
  dispatch(setPostsIsLoading(true));
  
  getPosts()
    .then(posts => setTimeout(() => {
        dispatch(setPostsIsLoading(false));
        dispatch(setPosts(posts));
      }, 1000))
    .catch(() => dispatch(setPosts([])));
};

export const getfilteredPostsThunkCreator = (searchvalue) =>
  dispatch => {
    dispatch(setPostsIsLoading(true));

    getFilteredPosts(searchvalue)
      .then(filteredPosts => setTimeout(() => {
          dispatch(setPostsIsLoading(false));
          dispatch(setPosts(filteredPosts));
        }, 300))
      .catch(() => dispatch(setPosts([])));
};

export const getUsersThunkCreator = isLoadingCB => dispatch => {
  dispatch(setUsersIsLoading(true));

  getUsers()
    .then(users => setTimeout(() => {
        dispatch(setUsersIsLoading(false));
        dispatch(setUsers(users));
      }, 2000))
    .catch(() => []);
};

export const getCommentsThunkCreator = isLoadingCB => dispatch => {
  dispatch(setCommentsIsLoading(true));

  getComments()
    .then(comments => setTimeout(() => {
        dispatch(setCommentsIsLoading(false));
        dispatch(setComments(comments));
      }, 3000))
    .catch(() => []);
};