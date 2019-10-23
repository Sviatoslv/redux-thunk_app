import React from 'react';
import { connect } from 'react-redux';

import PathViewer from '../PathViewer/PathViewer';

const ItemPage = ({ pathname }) => {
  return (
    <div>
      <h1>Item Page</h1>

      <PathViewer pathname={pathname}/>
    </div>
)}

const getData = (state) => ({
  pathname: state.router.location.pathname,
});

export default connect(getData)(ItemPage);
