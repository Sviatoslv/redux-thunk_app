import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPostsThunkCreator } from '../store/actions';
import { posts, postsIsLoaded } from '../store/store';

import ShowPath from './ShowPath';
import List from './List';

const ListPage = ({
    posts=[],
    postsIsLoaded,
    getPostsThunkCreator,
  }) => {
  useEffect(() => {
    getPostsThunkCreator();
  }, []);

  return (
    <div>
      <h1>List Page</h1>
      <ShowPath />

      <List
        list={posts}
        isLoaded={postsIsLoaded}
      />
    </div>
)};

const getData = (state) => ({
  posts: posts(state),
  postsIsLoaded: postsIsLoaded(state),
});

const getMethod = {
  getPostsThunkCreator,
};

export default connect(getData, getMethod)(ListPage);
