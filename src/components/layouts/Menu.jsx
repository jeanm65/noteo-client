import React from 'react';

import { NavLink } from 'react-router-dom';

const menus = [
    {
        text: 'Home',
        url: '/',
    },
    {
        text: 'Notes',
        url: '/notes',
    },
    {
        text: 'Login',
        url: '/login',
    },
];

const Menu = () => {
  return (
    <div className="Menu">
      <ul className="menu-item">
        {menus.map((menu, index) => (
          <li key={index} className="menu-items">
            <NavLink to={menu.url}>
              {menu.text}
            </NavLink>
          </li>
                ))}
      </ul>
    </div>
  );
};

export default Menu;
