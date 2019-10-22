import React, { useState }  from 'react';

const PathViewer = ({ pathname }) => {
  const [isPathVisibale, setIsPathVisibale] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setIsPathVisibale(!isPathVisibale)}
      >
        {isPathVisibale ? 'Hide' : 'Show'} current path
      </button>

      {isPathVisibale && <p>Current path is '{pathname}'</p>}
    </>
  )
}

export default PathViewer;