import React from 'react';
import './List.css';

const List = ({ list=[], isLoading, getThunkCreator }) => (
  <div className="List">
    <button onClick={() => {getThunkCreator()}}>Refresh</button>

    {
      isLoading
        && <div className="loader">Loading...</div>
    }
    {
      !isLoading
        && list.length
        && <ul>
              {list.map(item =>
                <li key={item.id}>
                  {item.name ? item.name : item.title}
                </li>)}
            </ul>
    }
    {
      !isLoading
        && !list.length
        && <p>Something went wrong...</p>
    }
  </div>
)

export default List;