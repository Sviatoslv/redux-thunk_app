import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPostsThunkCreator } from '../../store/actionCreators';
import { posts, postsIsLoaded } from '../../store/store';

import PathViewer from '../PathViewer/PathViewer';
import List from '../List/List';

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
      <PathViewer />

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
