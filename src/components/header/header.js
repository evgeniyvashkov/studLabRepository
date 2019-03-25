import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='header__wrapper'>
                    <a href='index.html' className='header__logo'>logo</a>
                    <button className='header__button sign-in' onClick={(e)=>console.log('Clicked')}>sign-in</button>
                    <button className='header__button sign-up'>sign-up</button>
                </div>
            </header>
        )
    }
}