import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { connectRouter } from 'connected-react-router';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { postsReducer } from './reducers/postsReducer';
import { commentsReducer } from './reducers/commentsReducer';
import { usersReducer } from './reducers/usersReducer';

export const posts = ({ postsList }) => postsList.posts;
export const users = ({ usersList }) => usersList.users;
export const comments = ({ commentsList }) => commentsList.comments;

export const postsIsLoading = ({ postsList }) => postsList.postsIsLoading;
export const usersIsLoading = ({ usersList }) => usersList.usersIsLoading;
export const commentsIsLoading = ({ commentsList }) => commentsList.commentsIsLoading;

export const history = createBrowserHistory();

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  postsList: postsReducer,
  commentsList: commentsReducer,
  usersList: usersReducer,
});

const middleware = [routerMiddleware(history), thunk];
const logger = createLogger({ collapsed: true });

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
)

const store = createStore(
  rootReducer(history),
  composedEnhancers
)

export default store
