import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from '../Navigation/';
import { UserMenu } from '../UserMenu/'

import './header.scss';

export const Header = ({ isLogged, logOut, userInfo }) => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <Link to="/" className="header__logo">logo</Link>

                {isLogged ?
                    <Fragment>
                        <Navigation />
                        <UserMenu userInfo={userInfo} logOut={logOut} />
                    </Fragment> :
                    <Link to="/registration" className="header__button sign-in">Sign-in</Link>
                }
            </div>
        </header>
    )
}
