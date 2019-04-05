import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../Button';
import { Navigation } from '../Navigation';
import { showModal } from '../pop-up/pop-up';

import './header.scss';

export const Header = () =>
    <header className='header'>
        <div className='header__wrapper'>
            <Link to='/' className='header__logo'>logo</Link>
            <Navigation />
            <Button className={'header__button sign-in'}
                value='sign-in'
                onClick={showModal}
            />
        </div>
    </header>