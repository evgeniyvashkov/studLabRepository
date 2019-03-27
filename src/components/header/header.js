import React, { Component } from 'react';

import Button from '../button';
import { showModal } from '../pop-up/pop-up';

import './header.css';

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='header__wrapper'>
                    <a href='index.html' className='header__logo'>logo</a>
                    <Button classList='header__button sign-in'
                        value='sign-in' 
                        onClick = {showModal}
                        />
                    <Button classList='header__button sign-up' value='sign-up' />
                </div>
            </header>
        )
    }
}