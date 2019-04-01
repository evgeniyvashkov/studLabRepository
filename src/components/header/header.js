import React from 'react';

import { Button } from '../Button';
import { showModal } from '../pop-up/pop-up';

import './header.css';

export const Header = (props) =>
    <header className='header'>
        <div className='header__wrapper'>
            <a href='index.html' className='header__logo'>logo</a>
            <Button classList='header__button sign-in'
                value='sign-in'
                onClick={showModal}
            />
            <Button classList='header__button sign-up' value='sign-up' />
        </div>
    </header>