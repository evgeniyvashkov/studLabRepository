import React, { Component } from 'react';

import Button from '../button';
// import ModalWindowHandler from '../../pop-up';

import './header.css';

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='header__wrapper'>
                    <a href='index.html' className='header__logo'>logo</a>
                    <Button classList='header__button sign-in'
                        name='sign-in' />
                    <Button classList='header__button sign-up' name='sign-up' />
                </div>
            </header>
        )
    }
}