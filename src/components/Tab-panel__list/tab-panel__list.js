import React from 'react';
import classNames from 'classnames';

import './tab-panel__list.css';

export const TabPanelList = ({ navLabel, onChangeActiveTab, className }) => {
    const classes = classNames(
        'tab-panel__tab',
        className
    )

    return (
        <div
            className={classes}
            onClick={() => onChangeActiveTab(navLabel)}
        >
            {navLabel}
        </div>
    )
}

