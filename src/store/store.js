import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import { postsReducer } from './reducers/postsReducer';
import { commentsReducer } from './reducers/commentsReducer';
import { usersReducer } from './reducers/usersReducer';

export const posts = ({ postsList }) => postsList.posts;
export const postsIsLoaded = ({ postsList }) => postsList.postsIsLoaded;
export const comments = ({ commentsList }) => commentsList.comments;
export const commentsIsLoaded = ({ commentsList }) => commentsList.commentsIsLoaded;
export const users = ({ usersList }) => usersList.users;
export const usersIsLoaded = ({ usersList }) => usersList.usersIsLoaded;

const rootReducer = combineReducers({
  postsList: postsReducer,
  commentsList: commentsReducer,
  usersList: usersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;
