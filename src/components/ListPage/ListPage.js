import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  getPostsThunkCreator,
  getfilteredPostsThunkCreator,
} from '../../store/actionCreators';
import { posts, postsIsLoading } from '../../store/store';

import List from '../List/List';
import PathViewer from '../PathViewer/PathViewer';

const ListPage = ({
    posts=[],
    postsIsLoading,
    getPostsThunkCreator,
    getfilteredPostsThunkCreator,
    pathname,
  }) => {
  const [queryValue, setQueryValue] = useState('');

  useEffect(() => {
    getPostsThunkCreator();
  }, []);

  return (
    <div>
      <h1>List Page</h1>

      <PathViewer pathname={pathname}/>

      <div>
        <input
          type="text"
          value={queryValue}
          onChange={(event) => {
            setQueryValue(event.target.value);
            getfilteredPostsThunkCreator(event.target.value);
          }}
        />
        
        <p>{queryValue}</p>

        <List
          list={posts}
          isLoading={postsIsLoading}
          getThunkCreator={getPostsThunkCreator}
        />
      </div>
    </div>
)};

const getData = (state) => ({
  posts: posts(state),
  postsIsLoading: postsIsLoading(state),
  pathname: state.router.location.pathname,
});

const getMethod = {
  getPostsThunkCreator,
  getfilteredPostsThunkCreator,
};

export default connect(getData, getMethod)(ListPage);
