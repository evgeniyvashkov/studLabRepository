import React, { Fragment } from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';

import '../../normalize.css';
import './app.scss';

import { PageContent } from '../PageContent';

export const App = (props) => {
    const { children, changeText, isLoged, logOut } = props;
    return (
        <Fragment>
            <Header isLoged={isLoged} logOut={logOut} />
            <PageContent>
                {children}
                {/* Для теста что изменяет стор в редаксе удалю в ближайших коммитах */}
                <h1 onClick={changeText}>
                    {(props.isBtnPressed) ? 'BTN PRESSED' : 'Not yet'}</h1>
            </PageContent>
            <Footer />
        </Fragment>
    )
}