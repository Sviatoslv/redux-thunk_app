import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { connectRouter } from 'connected-react-router';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { postsReducer } from './reducers/postsReducer';
import { commentsReducer } from './reducers/commentsReducer';
import { usersReducer } from './reducers/usersReducer';

export const posts = ({ postsList }) => postsList.posts;
export const postsIsLoaded = ({ postsList }) => postsList.postsIsLoaded;
export const comments = ({ commentsList }) => commentsList.comments;
export const commentsIsLoaded = ({ commentsList }) => commentsList.commentsIsLoaded;
export const users = ({ usersList }) => usersList.users;
export const usersIsLoaded = ({ usersList }) => usersList.usersIsLoaded;

export const history = createBrowserHistory();

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  postsList: postsReducer,
  commentsList: commentsReducer,
  usersList: usersReducer,
});

const middleware = [thunk, routerMiddleware(history)];
const logger = createLogger({ collapsed: true });

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    applyMiddleware(...middleware)
  );

  return store
}
