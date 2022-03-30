import React from 'react';
import { NavLink } from 'react-router-dom';

const menus = [
    {
        text: 'Home',
        url: '/'
    },
    {
        text: 'Notes',
        url: '/notes'
    },
    {
        text: 'Login',
        url: '/login'
    },
];

const Menu = () => {
    return (
        <div className='Menu'>
            <ul>
                {menus.map((menu, index) => (
                    <li key={index}>
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