import React, { useEffect } from 'react';

const List = ({ list, isLoaded }) => (
  <div style={{maxHeight: '300px', minWidth: '200px', maxWidth: '300px', overflow: 'scroll'}}>
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