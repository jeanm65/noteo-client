import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='Menu'>
            <ul>
                <NavLink to='/'>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/notes'>
                    <li>Notes</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Menu;