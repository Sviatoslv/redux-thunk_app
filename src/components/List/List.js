import React from 'react';
import './List.css';

const List = ({ list=[], isLoaded }) => (
  <div className="List">
    {
      !isLoaded
      && <div className="loader">Loading...</div>
    }
    {
      isLoaded
      && list.length
      && <ul>
            {list.map(item =>
              <li key={item.id}>
                {item.name ? item.name : item.title}
              </li>)}
          </ul>
    }
    {
      isLoaded
        && !list.length
        && <p>Something went wrong...</p>
    }
  </div>
)

export default List;