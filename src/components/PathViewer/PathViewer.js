import React, { useState }  from 'react';
import { createBrowserHistory } from 'history';

const PathViewer = () => {
  const [isPathVisibale, setIsPathVisibale] = useState(false);
  const history = createBrowserHistory();
  const location = history.location;
  
  return (
    <>
      <button
        onClick={() => setIsPathVisibale(!isPathVisibale)}
      >
        {isPathVisibale ? 'Hide' : 'Show'} current path
      </button>

      {isPathVisibale && <p>Current path is '{location.pathname}'</p>}
    </>
  )
}

export default PathViewer;