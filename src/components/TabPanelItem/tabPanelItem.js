import React from 'react';
import classNames from 'classnames';

import './tabPanelItem.scss';

export const TabPanelItem = ({ children, label, activeTab }) => {
    const classes = classNames(
        'tab__panel-item',
        { 'active': activeTab === label }
    )

    return (
        <div className={classes}>
            {children}
        </div>
    )
}