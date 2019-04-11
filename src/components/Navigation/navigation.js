import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.scss';

export const Navigation = () => (
    <nav className="navigation">
        <ul className="navigation__list">
            <li className="navigation__item">
                <Link to="/" className="navigation__item-link">Home</Link>
            </li>
            <li className="navigation__item">
                <Link to="/registration" className="navigation__item-link">Registration-page</Link>
            </li>
            <li className="navigation__item">
                <Link to="/license" className="navigation__item-link">License-page</Link>
            </li>
        </ul>
    </nav>
)