import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from '../Navigation';
import { Button } from '../Button';

import './header.scss';

export const Header = ({ isLogged, onClick, logOut }) => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <Link to="/" className="header__logo">logo</Link>

                {isLogged ?
                    <Fragment>
                        <Navigation />
                        <span>Eugene Vashkov</span>
                        <Button
                            className="button-green"
                            value="Log-out"
                            onClick={logOut} />
                    </Fragment> :
                    <Link to="/registration" className="header__button sign-in">Sign-in</Link>
                }
            </div>
        </header>
    )
}
