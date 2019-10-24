import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  getPostsThunkCreator,
  getCommentsThunkCreator,
  getUsersThunkCreator
} from '../../store/actionCreators';

import {
  posts,
  users,
  comments,
  postsIsLoading,
  usersIsLoading,
  commentsIsLoading,
} from '../../store/store';

import './LandingPage.css';
import List from '../List/List';
import PathViewer from '../PathViewer/PathViewer';

const LandingPage = ({
    posts=[],
    comments=[],
    users=[],
    postsIsLoading,
    usersIsLoading,
    commentsIsLoading,
    getPostsThunkCreator,
    getCommentsThunkCreator,
    getUsersThunkCreator,
    pathname,
  }) => {

  useEffect(() => {
    getPostsThunkCreator();
    getCommentsThunkCreator();
    getUsersThunkCreator();
  }, []);

  return (
    <div>
      <h1>Landing Page</h1>

      <PathViewer pathname={pathname}/>

      <div className='lists'>
        <List
          list={posts}
          isLoading={postsIsLoading}
          getThunkCreator={getPostsThunkCreator}
        />

        <List
          list={comments}
          isLoading={commentsIsLoading}
          getThunkCreator={getCommentsThunkCreator}
        />

        <List
          list={users}
          isLoading={usersIsLoading}
          getThunkCreator={getUsersThunkCreator}
        />
      </div>
    </div>
)}

const getData = (state) => ({
  posts: posts(state),
  users: users(state),
  comments: comments(state),
  postsIsLoading: postsIsLoading(state),
  usersIsLoading: usersIsLoading(state),
  commentsIsLoading: commentsIsLoading(state),
  pathname: state.router.location.pathname,
});

const getMethod = {
  getPostsThunkCreator,
  getCommentsThunkCreator,
  getUsersThunkCreator,
};

export default connect(getData, getMethod)(LandingPage);
