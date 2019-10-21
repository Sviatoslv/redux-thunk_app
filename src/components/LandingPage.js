import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  getPostsThunkCreator,
  getCommentsThunkCreator,
  getUsersThunkCreator
} from '../store/actions';

import {
  posts,
  postsIsLoaded,
  comments,
  commentsIsLoaded,
  users,
  usersIsLoaded
} from '../store/store';

import './LandingPage.css';
import ShowPath from './ShowPath';
import List from './List';

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
  }) => {
  useEffect(() => {
    getPostsThunkCreator();
    getCommentsThunkCreator();
    getUsersThunkCreator();
  }, []);

  return (
    <div>
      <h1>Landing Page</h1>

      <div className='lists'>
        <List list={posts} isLoaded={postsIsLoaded} />
        <List list={comments} isLoaded={commentsIsLoaded} />
        <List list={users} isLoaded={usersIsLoaded} />
      </div>

      <ShowPath />
    </div>
)}

const getData = (state) => ({
  posts: posts(state),
  postsIsLoaded: postsIsLoaded(state),
  comments: comments(state),
  commentsIsLoaded: commentsIsLoaded(state),
  users: users(state),
  usersIsLoaded: usersIsLoaded(state),
});

const getMethod = {
  getPostsThunkCreator,
  getCommentsThunkCreator,
  getUsersThunkCreator,
};

export default connect(getData, getMethod)(LandingPage);
