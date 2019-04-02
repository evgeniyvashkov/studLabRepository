import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css';

export const Navigation = () => (
    <nav className='navigation'>
        <ul className='navigation__list'>
            <li className='navigation__item'>
                <Link to='/' className='navigation__item-link'>Home</Link>
            </li>
            <li className='navigation__item'>
                <Link to='/registration' className='navigation__item-link'>registration</Link>
            </li>
        </ul>
    </nav>
)