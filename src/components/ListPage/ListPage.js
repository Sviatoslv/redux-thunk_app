import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPostsThunkCreator } from '../../store/actionCreators';
import { posts, postsIsLoaded } from '../../store/store';

import List from '../List/List';
import PathViewer from '../PathViewer/PathViewer';

const ListPage = ({
    posts=[],
    postsIsLoaded,
    getPostsThunkCreator,
    pathname,
  }) => {
  useEffect(() => {
    getPostsThunkCreator();
  }, []);


  return (
    <div>
      <h1>List Page</h1>

      <PathViewer pathname={pathname}/>

      <List
        list={posts}
        isLoaded={postsIsLoaded}
      />
    </div>
)};

const getData = (state) => ({
  posts: posts(state),
  postsIsLoaded: postsIsLoaded(state),
  pathname: state.router.location.pathname,
});

const getMethod = {
  getPostsThunkCreator,
};

export default connect(getData, getMethod)(ListPage);
