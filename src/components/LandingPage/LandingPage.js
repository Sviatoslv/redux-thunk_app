import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  getPostsThunkCreator,
  getCommentsThunkCreator,
  getUsersThunkCreator
} from '../../store/actionCreators';

import {
  posts,
  postsIsLoaded,
  comments,
  commentsIsLoaded,
  users,
  usersIsLoaded
} from '../../store/store';

import './LandingPage.css';
import List from '../List/List';
import PathViewer from '../PathViewer/PathViewer';

const LandingPage = ({
    posts=[],
    comments=[],
    postsIsLoaded,
    commentsIsLoaded,
    users=[],
    usersIsLoaded,
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
        <List list={posts} isLoaded={postsIsLoaded} />
        <List list={comments} isLoaded={commentsIsLoaded} />
        <List list={users} isLoaded={usersIsLoaded} />
      </div>
    </div>
)}

const getData = (state) => ({
  posts: posts(state),
  postsIsLoaded: postsIsLoaded(state),
  comments: comments(state),
  commentsIsLoaded: commentsIsLoaded(state),
  users: users(state),
  usersIsLoaded: usersIsLoaded(state),
  pathname: state.router.location.pathname,
});

const getMethod = {
  getPostsThunkCreator,
  getCommentsThunkCreator,
  getUsersThunkCreator,
};

export default connect(getData, getMethod)(LandingPage);
