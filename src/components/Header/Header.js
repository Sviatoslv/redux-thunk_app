import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/list">List Page</NavLink>
      </li>
      
      <li>
        <NavLink to="/item">Item Page</NavLink>
      </li>
    </ul>
  </nav>
)

export default Header;