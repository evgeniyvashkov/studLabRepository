import React from 'react';

import { Button } from '../Button';
import { Navigation } from '../Navigation';
import { showModal } from '../pop-up/pop-up';

import './header.css';

export const Header = () =>
    <header className='header'>
        <div className='header__wrapper'>
            <a href='index.html' className='header__logo'>logo</a>
            <Navigation />
            <Button classList='header__button sign-in'
                value='sign-in'
                onClick={showModal}
            />
        </div>
    </header>