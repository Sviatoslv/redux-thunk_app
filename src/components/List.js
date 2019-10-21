import React from 'react';
import './List.css';

const List = ({ list, isLoaded }) => (
  <div className="List">
    {isLoaded
      ? 
      <ul>
        {list.map(item =>
          <li key={item.id}>
            {item.name ? item.name : item.title}
          </li>)}
      </ul>
      : <div class="loader">Loading...</div>
    }
  </div>
)

export default List;