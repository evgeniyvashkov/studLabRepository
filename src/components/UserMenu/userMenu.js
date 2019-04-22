import React from 'react';

import defaultUserIcon from './userIconDefault.png';
import './userMenu.scss';

export const UserMenu = (props) => {
    const { userInfo: { userName, avatarLink }, logOut } = props;

    return (
        <div className="user-menu">
            <div className="user-menu__name">{userName}</div>
            <div className="user-menu__icon">
                <img
                    className="user-menu__avatar"
                    src={avatarLink || defaultUserIcon}
                    alt={`@${userName}`} />
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
