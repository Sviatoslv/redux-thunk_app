import React, { useState, useEffect } from 'react';
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
    users=[],
    getPostsThunkCreator,
    getCommentsThunkCreator,
    getUsersThunkCreator,
    pathname,
  }) => {
  const [postsIsLoaded, setPostsIsLoaded] = useState('');
  const [commentsIsLoaded, setCommentsIsLoaded] = useState('');
  const [usersIsLoaded, setUsersIsLoaded] = useState('');

  useEffect(() => {
    getPostsThunkCreator(setPostsIsLoaded);
    getCommentsThunkCreator(setCommentsIsLoaded);
    getUsersThunkCreator(setUsersIsLoaded);
  }, []);

  return (
    <div>
      <h1>Landing Page</h1>

      <PathViewer pathname={pathname}/>

      <div className='lists'>
        <List
          list={posts}
          isLoaded={postsIsLoaded}
          getThunkCreator={getPostsThunkCreator}
          setIsLoaded={setPostsIsLoaded}
        />

        <List
          list={comments}
          isLoaded={commentsIsLoaded}
          getThunkCreator={getCommentsThunkCreator}
          setIsLoaded={setCommentsIsLoaded}
        />

        <List
          list={users}
          isLoaded={usersIsLoaded}
          getThunkCreator={getUsersThunkCreator}
          setIsLoaded={setUsersIsLoaded}
        />
      </div>
    </div>
)}

const getData = (state) => ({
  posts: posts(state),
  comments: comments(state),
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
