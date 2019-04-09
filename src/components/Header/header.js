import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from '../Navigation';
<<<<<<< HEAD:src/components/Header/header.js
import { showModal } from '../PopUp/popUp';

import './header.scss';

export const Header = () =>
    <header className="header">
        <div className="header__wrapper">
            <Link to='/' className="header__logo">logo</Link>
            <Navigation />
            <Button className="header__button sign-in"
                value='sign-in'
                onClick={showModal}
            />
        </div>
    </header>
=======
import { Button } from '../Button';

import './header.scss';

export const Header = ({ isLoged, onClick, logOut }) => {
    console.log('IS LOGED HEADER ', isLoged)
    return (
        <header className='header'>
            <div className='header__wrapper'>
                <Link to='/' className='header__logo'>logo</Link>

                {isLoged ?
                    <Fragment>
                        <Navigation />
                        <span style={{ color: 'white' }}>Eugene Vashkov</span>
                        <Button
                            className='button-green'
                            value='Log-out'
                            onClick={logOut} />
                    </Fragment> :
                    <Link to='/registration' className='header__button sign-in'>Sign-in</Link>
                }
            </div>
        </header>
    )
}
>>>>>>> connect to redux, create pseudo-login:src/components/header/header.js
