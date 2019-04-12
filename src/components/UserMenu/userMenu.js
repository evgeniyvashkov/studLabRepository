import React from 'react';

import defaultUserIcon from './userIconDefault.png';
import './userMenu.scss';

export const UserMenu = (props) => {
    const { name, avatar, logOut } = props;

    return (
        <div className="user-menu">
            <div className="user-menu__name">{name}</div>
            <div className="user-menu__icon">
                <img
                    className="user-menu__avatar"
                    src={avatar ? avatar : defaultUserIcon}
                    alt={`@${name}`} />
            </div>

            <div className="user-menu__dropdown-menu">
                <a href="#1" className="user-menu__dropdown-item">Settings</a>
                <a href="#1"
                    className="user-menu__dropdown-item"
                    onClick={logOut}
                >Sign-out</a>
            </div>
        </div>
    )
}
